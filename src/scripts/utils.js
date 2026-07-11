export function normalizeText(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function stripHtml(value) {
  const template = document.createElement("template");
  template.innerHTML = String(value ?? "");
  return template.content.textContent.replace(/\s+/g, " ").trim();
}

export function groupBy(items, getKey) {
  return items.reduce((groups, item) => {
    const key = getKey(item);
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(item);
    return groups;
  }, new Map());
}

export function sortByTitle(items) {
  return [...items].sort((a, b) => a.title.localeCompare(b.title, "es", { sensitivity: "base" }));
}

export function typeLabel(type) {
  const labels = {
    [RESOURCE_TYPE.ARTICLE]: "Articulo",
    [RESOURCE_TYPE.COMMAND]: "Comando",
    [RESOURCE_TYPE.LINK]: "Enlace",
    [RESOURCE_TYPE.NOTE]: "Nota",
    [RESOURCE_TYPE.PRODUCT]: "Producto",
    [RESOURCE_TYPE.SNIPPET]: "Snippet",
    [RESOURCE_TYPE.TOOL]: "Herramienta",
  };

  return labels[type] ?? "Recurso";
}

export function unique(values) {
  return [...new Set(values.filter(Boolean))];
}
import { RESOURCE_TYPE } from "../data/constants.js";
