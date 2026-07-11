import { CATEGORY_ID, RESOURCE_TYPE } from "../constants.js";
import { defineCategoryResources } from "./define-category-resources.js";

export const learningResources = defineCategoryResources(CATEGORY_ID.LEARNING, [
{
    id: "course-udemy",
    title: "Udemy",
    description: "Plataforma de cursos online.",
    group: "Cursos",
    type: RESOURCE_TYPE.LINK,
    url: "https://www.udemy.com/",
    tags: ["cursos"],
  },
{
    id: "course-duolingo",
    title: "Duolingo",
    description: "Plataforma para aprender idiomas.",
    group: "Idiomas",
    type: RESOURCE_TYPE.LINK,
    url: "https://es.duolingo.com/",
    tags: ["idiomas"],
  },
{
    id: "course-miriadax",
    title: "Miriadax",
    description: "Plataforma de cursos online.",
    group: "Cursos",
    type: RESOURCE_TYPE.LINK,
    url: "https://miriadax.net/",
    tags: ["cursos"],
  }
]);
