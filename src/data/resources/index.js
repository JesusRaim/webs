import { aiResources } from "./ai.js";
import { developerResources } from "./developer.js";
import { pcResources } from "./pc.js";
import { softwareResources } from "./software.js";
import { windowsResources } from "./windows.js";
import { gamingResources } from "./gaming.js";
import { hardwareResources } from "./hardware.js";
import { textResources } from "./text.js";
import { learningResources } from "./learning.js";
import { shoppingResources } from "./shopping.js";
import { validateResourceCatalog } from "./define-category-resources.js";

export const resources = validateResourceCatalog([
  ...aiResources,
  ...developerResources,
  ...pcResources,
  ...softwareResources,
  ...windowsResources,
  ...gamingResources,
  ...hardwareResources,
  ...textResources,
  ...learningResources,
  ...shoppingResources,
]);
