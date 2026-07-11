import { CATEGORY_ID, RESOURCE_TYPE } from "../constants.js";

const categoryIds = new Set(Object.values(CATEGORY_ID));
const resourceTypes = new Set(Object.values(RESOURCE_TYPE));

export function defineCategoryResources(category, resources) {
  if (!categoryIds.has(category)) {
    throw new Error(`Categoria de recursos no valida: ${category}`);
  }

  return resources.map((resource) => {
    if ("category" in resource) {
      throw new Error(`El recurso "${resource.id ?? "sin id"}" no debe definir su propia categoria.`);
    }

    if (!resourceTypes.has(resource.type)) {
      throw new Error(`Tipo no valido en el recurso "${resource.id ?? "sin id"}": ${resource.type}`);
    }

    return { ...resource, category };
  });
}

export function validateResourceCatalog(resources) {
  const resourceIds = new Set();

  for (const resource of resources) {
    if (!resource.id) {
      throw new Error("Todos los recursos deben tener un id.");
    }

    if (resourceIds.has(resource.id)) {
      throw new Error(`El id de recurso "${resource.id}" esta duplicado.`);
    }

    resourceIds.add(resource.id);
  }

  return resources;
}
