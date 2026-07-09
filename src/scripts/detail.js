import { categories } from "../data/catalog.js";
import { escapeHtml, typeLabel } from "./utils.js";
import { fetchContent } from "./search.js";

export function createDetailController(dialog) {
  const closeButton = dialog.querySelector("[data-close-dialog]");
  const content = dialog.querySelector("[data-dialog-content]");

  closeButton.addEventListener("click", () => closeDialog(dialog));
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      closeDialog(dialog);
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && dialog.open) {
      closeDialog(dialog);
    }
  });

  return {
    async open(resource) {
      content.innerHTML = renderDetailShell(resource, renderLoading());
      openDialog(dialog);

      try {
        const body = await renderDetailBody(resource);
        content.innerHTML = renderDetailShell(resource, body);
        enhanceLoadedContent(content);
      } catch (error) {
        content.innerHTML = renderDetailShell(resource, `<p class="load-error">${escapeHtml(error.message)}</p>`);
      }
    },
  };
}

function renderDetailShell(resource, body) {
  const category = categories.find((item) => item.id === resource.category);
  const external = resource.url
    ? `<a class="button" href="${escapeHtml(resource.url)}" target="_blank" rel="noopener noreferrer">Abrir enlace</a>`
    : "";

  return `<header class="detail-header" style="--category-accent: ${category?.accent ?? "#2563eb"}">
    <div>
      <span class="detail-kicker">${escapeHtml(typeLabel(resource.type))} &middot; ${escapeHtml(category?.label ?? "")}</span>
      <h2>${escapeHtml(resource.title)}</h2>
      <p>${escapeHtml(resource.description)}</p>
    </div>
    ${external}
  </header>
  <div class="detail-body">${body}</div>`;
}

async function renderDetailBody(resource) {
  const blocks = [];

  if (resource.image) {
    blocks.push(`<img class="detail-image" src="${escapeHtml(resource.image)}" alt="${escapeHtml(resource.title)}">`);
  }

  if (resource.commands?.length) {
    blocks.push(renderCommands(resource.commands));
  }

  if (resource.detailsHtml) {
    blocks.push(`<section class="detail-block">${resource.detailsHtml}</section>`);
  }

  if (resource.contentPath) {
    const html = await fetchContent(resource.contentPath);
    blocks.push(`<article class="legacy-content">${html}</article>`);
  }

  return blocks.join("");
}

function renderCommands(commands) {
  const items = commands
    .map((command) => `<li>
      <code>${escapeHtml(command)}</code>
      <button class="copy-command" type="button" data-copy="${escapeHtml(command)}">Copiar</button>
    </li>`)
    .join("");

  return `<section class="detail-block">
    <h3>Comandos</h3>
    <ul class="command-list">${items}</ul>
  </section>`;
}

function renderLoading() {
  return `<div class="loading-state" aria-live="polite">Cargando...</div>`;
}

function enhanceLoadedContent(container) {
  container.querySelectorAll("a[target='_blank']").forEach((link) => {
    link.setAttribute("rel", "noopener noreferrer");
  });

  container.querySelectorAll("[data-bs-toggle='collapse']").forEach((trigger) => {
    const selector = trigger.getAttribute("data-bs-target") ?? trigger.getAttribute("href");
    const target = selector ? container.querySelector(selector) : null;

    if (!target) {
      return;
    }

    trigger.setAttribute("role", "button");
    trigger.setAttribute("tabindex", "0");
    trigger.setAttribute("aria-expanded", target.classList.contains("show") ? "true" : "false");

    const toggle = (event) => {
      event.preventDefault();
      target.classList.toggle("show");
      const expanded = target.classList.contains("show");
      trigger.classList.toggle("collapsed", !expanded);
      trigger.setAttribute("aria-expanded", expanded ? "true" : "false");
    };

    trigger.addEventListener("click", toggle);
    trigger.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        toggle(event);
      }
    });
  });

  container.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.getAttribute("data-copy") ?? "";
      await navigator.clipboard?.writeText(value);
      button.textContent = "Copiado";
      setTimeout(() => {
        button.textContent = "Copiar";
      }, 1200);
    });
  });
}

function openDialog(dialog) {
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function closeDialog(dialog) {
  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}
