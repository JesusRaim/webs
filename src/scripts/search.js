import { normalizeText, stripHtml } from "./utils.js";

const contentCache = new Map();

export async function warmContentIndex(resources) {
  const articleResources = resources.filter((resource) => resource.contentPath);

  await Promise.allSettled(
    articleResources.map(async (resource) => {
      if (contentCache.has(resource.id)) {
        return;
      }

      const html = await fetchContent(resource.contentPath);
      contentCache.set(resource.id, stripHtml(html));
    }),
  );
}

export async function getResourceContent(resource) {
  if (!resource.contentPath) {
    return "";
  }

  if (!contentCache.has(resource.id)) {
    const html = await fetchContent(resource.contentPath);
    contentCache.set(resource.id, stripHtml(html));
  }

  return contentCache.get(resource.id);
}

export async function fetchContent(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`No se pudo cargar ${path} (${response.status})`);
  }

  return response.text();
}

export function filterResources(resources, state) {
  const query = normalizeText(state.query);

  return resources.filter((resource) => {
    const matchesCategory = state.category === CATEGORY_ID.DASHBOARD || resource.category === state.category;
    const matchesType = state.type === "all" || resource.type === state.type;
    const matchesQuery = query.length === 0 || searchableText(resource).includes(query);

    return matchesCategory && matchesType && matchesQuery;
  });
}

export function searchableText(resource) {
  const contentText = contentCache.get(resource.id) ?? "";
  const chunks = [
    resource.title,
    resource.description,
    resource.category,
    resource.group,
    resource.type,
    resource.url,
    resource.detailsHtml,
    resource.commands?.join(" "),
    resource.tags?.join(" "),
    contentText,
  ];

  return normalizeText(chunks.filter(Boolean).join(" "));
}
import { CATEGORY_ID } from "../data/constants.js";
