import { categories, resources } from "../data/catalog.js";
import { createDetailController } from "./detail.js";
import { filterResources, warmContentIndex } from "./search.js";
import { renderNavigation, renderResults, renderTypeOptions } from "./render.js";

const state = {
  category: "dashboard",
  query: "",
  type: "all",
};

const elements = {
  nav: document.querySelector("[data-navigation]"),
  results: document.querySelector("[data-results]"),
  search: document.querySelector("[data-search]"),
  typeFilter: document.querySelector("[data-type-filter]"),
  clearFilters: document.querySelector("[data-clear-filters]"),
  mobileMenu: document.querySelector("[data-mobile-menu]"),
  sidebar: document.querySelector("[data-sidebar]"),
  dialog: document.querySelector("[data-detail-dialog]"),
};

const detailController = createDetailController(elements.dialog);

init();

function init() {
  readRoute();
  bindEvents();
  render();

  warmContentIndex(resources).then(() => {
    if (state.query.trim()) {
      render();
    }
  });
}

function bindEvents() {
  window.addEventListener("hashchange", () => {
    readRoute();
    render();
  });

  elements.search.addEventListener("input", (event) => {
    state.query = event.target.value;
    render();
  });

  elements.typeFilter.addEventListener("change", (event) => {
    state.type = event.target.value;
    render();
  });

  elements.clearFilters.addEventListener("click", () => {
    state.query = "";
    state.type = "all";
    elements.search.value = "";
    elements.typeFilter.value = "all";
    render();
  });

  elements.mobileMenu.addEventListener("click", () => {
    elements.sidebar.classList.toggle("is-open");
  });

  document.addEventListener("click", (event) => {
    const categoryButton = event.target.closest("[data-category]");
    if (categoryButton) {
      selectCategory(categoryButton.getAttribute("data-category"));
      return;
    }

    const resourceButton = event.target.closest("[data-open-resource]");
    if (resourceButton) {
      openResource(resourceButton.getAttribute("data-open-resource"));
      return;
    }

    const resourceCard = event.target.closest("[data-resource-card]");
    if (resourceCard && !event.target.closest("a, button")) {
      openResource(resourceCard.getAttribute("data-resource-card"));
    }
  });
}

function selectCategory(category) {
  if (!categories.some((item) => item.id === category)) {
    return;
  }

  state.category = category;
  elements.sidebar.classList.remove("is-open");
  updateRoute(category);
  render();
}

function openResource(resourceId) {
  const resource = resources.find((item) => item.id === resourceId);
  if (!resource) {
    return;
  }

  detailController.open(resource);
}

function render() {
  const visibleResources = filterResources(resources, state);

  elements.nav.innerHTML = renderNavigation(state);
  elements.typeFilter.innerHTML = renderTypeOptions(state);
  elements.typeFilter.value = state.type;
  elements.results.innerHTML = renderResults(state, visibleResources);
  elements.clearFilters.hidden = state.query.trim() === "" && state.type === "all";
}

function readRoute() {
  const route = location.hash.replace(/^#\/?/, "");
  const category = route || "dashboard";

  state.category = categories.some((item) => item.id === category) ? category : "dashboard";
}

function updateRoute(category) {
  const target = category === "dashboard" ? "#/" : `#/${category}`;
  if (location.hash !== target) {
    history.pushState(null, "", target);
  }
}
