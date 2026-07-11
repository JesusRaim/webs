import { CATEGORY_ID, RESOURCE_TYPE } from "../constants.js";
import { defineCategoryResources } from "./define-category-resources.js";

export const shoppingResources = defineCategoryResources(CATEGORY_ID.SHOPPING, [
{
    id: "shop-emugames",
    title: "EmuGames",
    description: "Emuladores.",
    group: "Gaming",
    type: RESOURCE_TYPE.LINK,
    url: "https://www.emugames.net/",
    tags: ["emuladores", "gaming"],
  },
{
    id: "shop-boardgamearena",
    title: "Board Game Arena",
    description: "Juegos de mesa en linea.",
    group: "Gaming",
    type: RESOURCE_TYPE.LINK,
    url: "https://es.boardgamearena.com/",
    tags: ["juegos-mesa", "online"],
  },
{
    id: "shop-gocdkeys",
    title: "Go CD Keys",
    description: "Compra de claves para software.",
    group: "Claves",
    type: RESOURCE_TYPE.LINK,
    url: "https://gocdkeys.es/",
    tags: ["claves", "software"],
  },
{
    id: "shop-difmark",
    title: "DIFMARK",
    description: "Compra de claves para software.",
    group: "Claves",
    type: RESOURCE_TYPE.LINK,
    url: "https://difmark.com/es",
    tags: ["claves", "software"],
  },
{
    id: "shop-instant-gaming",
    title: "Instant Gaming",
    description: "Compra de juegos.",
    group: "Juegos",
    type: RESOURCE_TYPE.LINK,
    url: "https://www.instant-gaming.com/es/",
    tags: ["juegos", "claves"],
  },
{
    id: "shop-humble-bundle",
    title: "Humble Bundle",
    description: "Compra de juegos y bundles.",
    group: "Juegos",
    type: RESOURCE_TYPE.LINK,
    url: "https://www.humblebundle.com/",
    tags: ["juegos", "bundles"],
  },
{
    id: "shop-tulotero",
    title: "Tu Lotero",
    description: "Compra de loteria.",
    group: "Otros",
    type: RESOURCE_TYPE.LINK,
    url: "https://web.tulotero.es/",
    tags: ["loteria"],
  }
]);
