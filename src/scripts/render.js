import { categories, resources } from "../data/catalog.js";
import { CATEGORY_ID } from "../data/constants.js";
import { escapeHtml, groupBy, sortByTitle, typeLabel, unique } from "./utils.js";

export function renderNavigation(state) {
  const counts = resources.reduce((acc, resource) => {
    acc[resource.category] = (acc[resource.category] ?? 0) + 1;
    return acc;
  }, {});

  return categories
    .map((category) => {
      const count = category.id === CATEGORY_ID.DASHBOARD ? resources.length : counts[category.id] ?? 0;
      const active = state.category === category.id ? "is-active" : "";

      return `<button class="nav-item ${active}" type="button" data-category="${category.id}" style="--category-accent: ${category.accent}">
        <span class="nav-mark">${escapeHtml(category.shortLabel)}</span>
        <span class="nav-text">
          <strong>${escapeHtml(category.label)}</strong>
          <small>${count}</small>
        </span>
      </button>`;
    })
    .join("");
}

export function renderTypeOptions(state) {
  const types = unique(resources.map((resource) => resource.type)).sort();

  return [`<option value="all">Todos los tipos</option>`]
    .concat(types.map((type) => `<option value="${type}" ${state.type === type ? "selected" : ""}>${typeLabel(type)}</option>`))
    .join("");
}

export function renderStats() {
  const typeCount = unique(resources.map((resource) => resource.type)).length;
  const articleCount = resources.filter((resource) => resource.contentPath).length;
  const linkCount = resources.filter((resource) => resource.url).length;

  return `<section class="stats-band" aria-label="Resumen">
    <div>
      <strong>${resources.length}</strong>
      <span>recursos</span>
    </div>
    <div>
      <strong>${categories.length - 1}</strong>
      <span>categorias</span>
    </div>
    <div>
      <strong>${typeCount}</strong>
      <span>tipos</span>
    </div>
    <div>
      <strong>${articleCount}</strong>
      <span>paginas</span>
    </div>
    <div>
      <strong>${linkCount}</strong>
      <span>enlaces</span>
    </div>
  </section>`;
}

export function renderDashboard() {
  const pinned = resources
    .map((resource, index) => ({ resource, index }))
    .filter(({ resource }) => resource.pinned)
    .sort((a, b) => (a.resource.pinnedOrder ?? Infinity) - (b.resource.pinnedOrder ?? Infinity) || a.index - b.index)
    .map(({ resource }) => resource);
  const categoryCards = categories
    .filter((category) => category.id !== CATEGORY_ID.DASHBOARD)
    .map((category) => {
      const count = resources.filter((resource) => resource.category === category.id).length;
      return `<button class="category-tile" type="button" data-category="${category.id}" style="--category-accent: ${category.accent}">
        <span>${escapeHtml(category.shortLabel)}</span>
        <strong>${escapeHtml(category.label)}</strong>
        <small>${count} recursos</small>
      </button>`;
    })
    .join("");

  return `${renderStats()}
    <section class="content-section">
      <div class="section-heading">
        <h2>Fijados</h2>
        <span>${pinned.length}</span>
      </div>
      <div class="resource-grid">${pinned.map(renderResourceCard).join("")}</div>
    </section>
    <section class="content-section">
      <div class="section-heading">
        <h2>Categorias</h2>
        <span>${categories.length - 1}</span>
      </div>
      <div class="category-grid">${categoryCards}</div>
    </section>`;
}

export function renderResults(state, visibleResources) {
  if (state.category === CATEGORY_ID.DASHBOARD && state.query.trim() === "" && state.type === "all") {
    return renderDashboard();
  }

  const category = categories.find((item) => item.id === state.category);
  const title = state.query.trim()
    ? `Resultados para "${escapeHtml(state.query.trim())}"`
    : escapeHtml(category?.label ?? "Recursos");

  if (visibleResources.length === 0) {
    return `<section class="empty-state">
      <h2>${title}</h2>
      <p>No hay recursos que coincidan con el filtro actual.</p>
    </section>`;
  }

  const groups = groupBy(sortByTitle(visibleResources), (resource) => resource.group ?? "General");
  const sections = [...groups.entries()]
    .map(([groupName, items]) => `<section class="content-section">
      <div class="section-heading">
        <h2>${escapeHtml(groupName)}</h2>
        <span>${items.length}</span>
      </div>
      <div class="resource-grid">${items.map(renderResourceCard).join("")}</div>
    </section>`)
    .join("");

  return `<section class="results-heading">
      <div>
        <h1>${title}</h1>
        <p>${visibleResources.length} recursos encontrados</p>
      </div>
    </section>
    ${sections}`;
}

export function renderResourceCard(resource) {
  const externalLink = resource.url
    ? `<a class="button button-ghost" href="${escapeHtml(resource.url)}" target="_blank" rel="noopener noreferrer">Abrir</a>`
    : "";
  const detailButton = hasDetails(resource)
    ? `<button class="button" type="button" data-open-resource="${resource.id}">Ver</button>`
    : "";
  const tags = (resource.tags ?? [])
    .slice(0, 4)
    .map((tag) => `<span>${escapeHtml(tag)}</span>`)
    .join("");
  const commands = resource.commands?.length
    ? `<div class="command-preview">${resource.commands.slice(0, 2).map((command) => `<code>${escapeHtml(command)}</code>`).join("")}</div>`
    : "";
  const image = resource.image
    ? `<img class="resource-image" src="${escapeHtml(resource.image)}" alt="${escapeHtml(resource.title)}">`
    : "";

  return `<article class="resource-card" data-resource-card="${resource.id}">
    ${image}
    <div class="resource-card-body">
      <div class="resource-meta">
        <span>${typeLabel(resource.type)}</span>
        <span>${escapeHtml(resource.group ?? "General")}</span>
      </div>
      <h3>${escapeHtml(resource.title)}</h3>
      <p>${escapeHtml(resource.description)}</p>
      ${commands}
      <div class="tag-list">${tags}</div>
    </div>
    <div class="resource-actions">
      ${detailButton}
      ${externalLink}
    </div>
  </article>`;
}

function hasDetails(resource) {
  return Boolean(resource.contentPath || resource.detailsHtml || resource.commands?.length || resource.image);
}
