import { CATEGORY_ID, RESOURCE_TYPE } from "../constants.js";
import { defineCategoryResources } from "./define-category-resources.js";

export const textResources = defineCategoryResources(CATEGORY_ID.TEXT, [
{
    id: "text-contar-caracteres",
    title: "Contar caracteres",
    description: "Herramienta online para contar caracteres.",
    group: "Texto",
    type: RESOURCE_TYPE.LINK,
    url: "https://www.contarcaracteres.com/",
    tags: ["texto", "contador"],
  },
{
    id: "text-spellboy",
    title: "Corrector gramatical",
    description: "Corrector gramatical online.",
    group: "Texto",
    type: RESOURCE_TYPE.LINK,
    url: "https://www.spellboy.com/corrector-gramatical/",
    tags: ["texto", "gramatica"],
  },
{
    id: "text-deepl",
    title: "DeepL",
    description: "Traductor online.",
    group: "Traduccion",
    type: RESOURCE_TYPE.LINK,
    url: "https://www.deepl.com/translator",
    tags: ["traduccion", "texto"],
  },
{
    id: "text-pdf2go",
    title: "PDF2Go",
    description: "Conversor y herramientas de PDF.",
    group: "PDF",
    type: RESOURCE_TYPE.LINK,
    url: "https://www.pdf2go.com/es",
    tags: ["pdf", "conversor"],
  },
{
    id: "text-excalidraw",
    title: "Excalidraw",
    description: "Crear diagramas y bocetos visuales de forma colaborativa.",
    group: "Diagramas",
    type: RESOURCE_TYPE.LINK,
    url: "https://excalidraw.com/",
    tags: ["diagramas", "bocetos"],
  },
{
    id: "text-xml-formatter",
    title: "XML Formatter",
    description: "Formateador XML en JSONFormatter.",
    group: "Formato",
    type: RESOURCE_TYPE.LINK,
    url: "https://jsonformatter.org/xml-formatter",
    tags: ["xml", "formatter"],
  }
]);
