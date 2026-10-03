const STORAGE_KEY = "mis-webs:digimon-world-2003:evolution-goals";
const DEFAULT_GOALS = [{
  id: "Agumon:Digitamamon",
  target: "Digitamamon",
  route: "Agumon",
  requirements: "MetalGarurumon Lv. 20",
}];

export function initEvolutionGoals(container) {
  const guide = container.querySelector(".digimon-2003-guide");
  if (!guide) {
    return;
  }

  const goals = loadGoals();
  saveGoals(goals);
  const panel = createGoalsPanel();
  guide.querySelector(".digimon-2003-guide__intro")?.after(panel);

  guide.querySelectorAll("table").forEach((table) => {
    const partner = table.closest(".digimon-2003-guide__partner")?.querySelector("summary span")?.textContent.trim();
    addGoalControls(table, goals, partner ?? "Evolución avanzada");
  });

  const update = () => {
    saveGoals(goals);
    renderGoalsPanel(panel, goals, update);
    updateControls(guide, goals);
  };

  guide.addEventListener("click", (event) => {
    const button = event.target.closest("[data-evolution-goal]");
    if (!button) {
      return;
    }

    const goal = JSON.parse(button.getAttribute("data-evolution-goal"));
    const index = goals.findIndex((item) => item.id === goal.id);

    if (index >= 0) {
      goals.splice(index, 1);
    } else {
      goals.push(goal);
    }

    update();
  });

  renderGoalsPanel(panel, goals, update);
  updateControls(guide, goals);
}

function addGoalControls(table, goals, defaultRoute) {
  const headerRow = table.querySelector("thead tr");
  if (headerRow) {
    const header = document.createElement("th");
    header.scope = "col";
    header.textContent = "Objetivo";
    headerRow.append(header);
  }

  table.querySelectorAll("tbody tr").forEach((row) => {
    const cells = row.querySelectorAll("td");
    if (cells.length < 2) {
      return;
    }

    const target = cells[0].textContent.trim();
    const options = readOptions(row, target, defaultRoute, cells);
    const cell = document.createElement("td");
    cell.className = "evolution-goal-cell";

    options.forEach((goal) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "evolution-goal-toggle";
      button.setAttribute("data-evolution-goal", JSON.stringify(goal));
      cell.append(button);
    });

    row.append(cell);
  });
}

function readOptions(row, target, defaultRoute, cells) {
  const rawOptions = row.getAttribute("data-evolution-options");
  const options = rawOptions
    ? JSON.parse(rawOptions)
    : [{ route: defaultRoute, requirements: cells[1].textContent.trim() }];

  return options.map(({ route, requirements }) => ({
    id: `${route}:${target}`,
    target,
    route,
    requirements,
  }));
}

function createGoalsPanel() {
  const panel = document.createElement("section");
  panel.className = "evolution-goals";
  panel.setAttribute("aria-live", "polite");
  return panel;
}

function renderGoalsPanel(panel, goals, update) {
  panel.replaceChildren();

  const heading = document.createElement("div");
  heading.className = "evolution-goals__heading";
  const title = document.createElement("h3");
  title.textContent = "Mis objetivos de evolución";
  const count = document.createElement("span");
  count.textContent = String(goals.length);
  heading.append(title, count);
  panel.append(heading);

  if (goals.length === 0) {
    const hint = document.createElement("p");
    hint.className = "evolution-goals__empty";
    hint.textContent = "Marca una estrella en una evolución para verla aquí de un vistazo.";
    panel.append(hint);
    return;
  }

  const list = document.createElement("ul");
  list.className = "evolution-goals__list";
  goals.forEach((goal) => {
    const item = document.createElement("li");
    const description = document.createElement("div");
    const target = document.createElement("strong");
    target.textContent = `${goal.target} · ${goal.route}`;
    const requirements = document.createElement("span");
    requirements.textContent = `Requisito: ${goal.requirements}`;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "evolution-goals__remove";
    remove.setAttribute("aria-label", `Quitar ${goal.target} de los objetivos`);
    remove.textContent = "×";
    remove.addEventListener("click", () => {
      const index = goals.findIndex((itemGoal) => itemGoal.id === goal.id);
      goals.splice(index, 1);
      update();
    });

    description.append(target, requirements);
    item.append(description, remove);
    list.append(item);
  });
  panel.append(list);

  const clear = document.createElement("button");
  clear.type = "button";
  clear.className = "evolution-goals__clear";
  clear.textContent = "Limpiar objetivos";
  clear.addEventListener("click", () => {
    goals.splice(0, goals.length);
    update();
  });
  panel.append(clear);
}

function updateControls(guide, goals) {
  const selected = new Set(goals.map((goal) => goal.id));
  guide.querySelectorAll("[data-evolution-goal]").forEach((button) => {
    const goal = JSON.parse(button.getAttribute("data-evolution-goal"));
    const isSelected = selected.has(goal.id);
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
    button.textContent = `${isSelected ? "★" : "☆"} ${goal.route}`;
  });
}

function loadGoals() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const goals = stored ? JSON.parse(stored) : DEFAULT_GOALS;
    return Array.isArray(goals) ? normalizeGoals(goals) : [...DEFAULT_GOALS];
  } catch {
    return [];
  }
}

function normalizeGoals(goals) {
  return goals.map((goal) => {
    if (goal.id === "Agumon:Digitamamon") {
      return { ...goal, requirements: "MetalGarurumon Lv. 20" };
    }

    return goal;
  });
}

function saveGoals(goals) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(goals));
  } catch {
    // La guía sigue siendo utilizable si el navegador bloquea el almacenamiento local.
  }
}
