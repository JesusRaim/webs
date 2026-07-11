import { CATEGORY_ID, RESOURCE_TYPE } from "../constants.js";
import { defineCategoryResources } from "./define-category-resources.js";

export const gamingResources = defineCategoryResources(CATEGORY_ID.GAMING, [
{
    id: "games-can-you-run",
    title: "Can You Run It",
    description: "Verificar si un juego corre en el PC.",
    group: "Recursos",
    type: RESOURCE_TYPE.LINK,
    url: "https://www.systemrequirementslab.com/cyri",
    tags: ["requisitos", "pc"],
  },
{
    id: "games-mapgenie",
    title: "Map Genie",
    description: "Mapas de juegos y coleccionables.",
    group: "Recursos",
    type: RESOURCE_TYPE.LINK,
    url: "https://mapgenie.io/",
    tags: ["mapas", "coleccionables"],
  },
{
    id: "games-boardgamearena",
    title: "Board Game Arena",
    description: "Juegos de mesa online.",
    group: "Recursos",
    type: RESOURCE_TYPE.LINK,
    url: "https://boardgamearena.com/",
    tags: ["juegos-mesa", "online"],
  },
{
    id: "games-steam-achievement-manager",
    title: "Steam Achievement Manager",
    description: "Software para conseguir todos los logros en Steam.",
    group: "Herramientas",
    type: RESOURCE_TYPE.LINK,
    url: "https://github.com/gibbed/SteamAchievementManager",
    tags: ["steam", "logros"],
  },
{
    id: "games-cdromance",
    title: "CDRomance",
    description: "Descarga de juegos de consolas.",
    group: "Retro",
    type: RESOURCE_TYPE.LINK,
    url: "https://cdromance.org/?s=army+men&language=spanish",
    tags: ["retro", "consolas"],
  },
{
    id: "games-retrogametalk",
    title: "Retrogametalk",
    description: "Repositorio para descarga de juegos de consolas.",
    group: "Retro",
    type: RESOURCE_TYPE.LINK,
    url: "https://retrogametalk.com/repository/",
    tags: ["retro", "consolas"],
  },
{
    id: "games-psx2psp",
    title: "PSX2PSP",
    description: "Programa simple para comprimir juegos a formato PBP de PlayStation/PSP.",
    group: "Retro",
    type: RESOURCE_TYPE.LINK,
    url: "https://aprendiz.foroactivo.com/t11-compresion-del-juego-en-formato-pbp-formato-playstation-psp",
    tags: ["psx", "psp", "pbp"],
    detailsHtml: `<p>Enlace alternativo conservado: <a href="https://docs.google.com/document/d/1LZ84sM88vHOTUzS7HGAJQkoc8ItjVtfL/edit?pli=1" target="_blank" rel="noopener noreferrer">documento de PSX2PSP</a>.</p>`,
  },
{
    id: "games-psxpackager",
    title: "PSXPackagerGUI",
    description: "Programa para compresion de juegos en formato PBP, con manual propio.",
    group: "Retro",
    type: RESOURCE_TYPE.ARTICLE,
    url: "https://github.com/RupertAvery/PSXPackager",
    contentPath: "src/content/manuals/PSXPackagerGUI.html",
    tags: ["psx", "psp", "pbp", "manual"],
    pinned: true,
  },
{
    id: "games-green-hell",
    title: "Guia Green Hell",
    description: "Tablas de crafteo y recursos para Green Hell.",
    group: "Guias",
    type: RESOURCE_TYPE.ARTICLE,
    contentPath: "src/content/guides/games/green-hell.html",
    tags: ["green-hell", "guia", "crafting"],
  },
{
    id: "games-digimon-world",
    title: "Guia Digimon World 1 PS1",
    description: "Tablas de evoluciones para Digimon World 1 de PS1.",
    group: "Guias",
    type: RESOURCE_TYPE.ARTICLE,
    contentPath: "src/content/guides/games/digimon-world-1-ps1.html",
    tags: ["digimon", "ps1", "guia", "evoluciones"],
  },
{
    id: "games-duckstation",
    title: "DuckStation",
    description: "Emulador de PS1. Requiere fichero de BIOS en la ruta indicada por el asistente.",
    group: "Emuladores",
    type: RESOURCE_TYPE.TOOL,
    url: "https://duckstation.org/",
    tags: ["ps1", "emulador", "bios"],
    detailsHtml: `<p>Tenemos que tener el fichero de <a href="https://www.youtube.com/watch?v=Rnn7SVKJuJw" target="_blank" rel="noopener noreferrer">BIOS</a>. Se coloca en la ruta indicada por el asistente de instalacion, por ejemplo <code>C:\\Users\\nameUser\\Documents\\DuckStation\\bios</code>.</p>`,
  },
{
    id: "pcgaming-game-mode",
    title: "Activar Windows en Modo Juego",
    description: "Windows prioriza la experiencia de juego desactivando tareas en segundo plano.",
    group: "PC Gaming",
    type: RESOURCE_TYPE.NOTE,
    tags: ["windows", "modo-juego", "rendimiento"],
    detailsHtml: `<p>En el buscador de Windows escribe <strong>Modo Juego</strong> y activa el check.</p>`,
  },
{
    id: "pcgaming-performance",
    title: "Aumentar rendimiento",
    description: "Ajustes de energia y NVIDIA para priorizar rendimiento.",
    group: "PC Gaming",
    type: RESOURCE_TYPE.NOTE,
    tags: ["nvidia", "rendimiento", "energia"],
    detailsHtml: `<ul>
      <li>Configurar el plan de energia como alto rendimiento.</li>
      <li>Panel de control NVIDIA > Configuracion 3D > GPU de renderizado OpenGL: usar la grafica.</li>
      <li>Modo baja latencia: ultra.</li>
      <li>Modo de control de energia: maximo rendimiento preferido.</li>
    </ul>`,
  },
{
    id: "pcgaming-performance-overlay",
    title: "Controlar rendimiento mientras juegas",
    description: "Usar Xbox Game Bar para anclar la ventana de rendimiento.",
    group: "PC Gaming",
    type: RESOURCE_TYPE.NOTE,
    tags: ["rendimiento", "xbox-game-bar"],
    detailsHtml: `<p>Pulsa <code>Control + G</code>, configura la ventana de rendimiento y anclala para verla durante la partida.</p>`,
  },
{
    id: "pcgaming-mouse-acceleration",
    title: "Desactivar mejora de puntero",
    description: "Desactivar la precision mejorada del raton en Windows.",
    group: "PC Gaming",
    type: RESOURCE_TYPE.NOTE,
    tags: ["raton", "windows", "puntero"],
    detailsHtml: `<p>Configuracion del mouse > Opciones avanzadas > Opciones del puntero > desactivar <strong>Mejorar la precision del puntero</strong>.</p>`,
  },
{
    id: "pcgaming-dstorage-fix",
    title: "Arreglar tirones, bajos FPS y micro-congelamientos",
    description: "Posible problema con dstorage.dll y dstoragecore.dll en algunos juegos.",
    group: "Bugs Game",
    type: RESOURCE_TYPE.NOTE,
    tags: ["fps", "dstorage", "spider-man", "horizon"],
    detailsHtml: `<p>En Spider-Man 2 se ha detectado un fallo con <code>dstorage.dll</code> y <code>dstoragecore.dll</code>. Son librerias de Microsoft para acelerar lectura de datos, pero una version puede provocar tirones, bajos FPS y micro-congelamientos.</p>
      <p>La solucion anotada es crear una carpeta en la raiz del juego que falla y mover esas librerias dentro. No garantiza que funcione en todos los juegos.</p>
      <ul>
        <li><a href="https://www.reddit.com/r/spiderman2/comments/1ifvzbg/how_to_fix_stutters_low_fps_and_micro_frezee_in/" target="_blank" rel="noopener noreferrer">Referencia Spider-Man 2</a></li>
        <li><a href="https://steamcommunity.com/app/2420110/discussions/0/4355617421472784811/" target="_blank" rel="noopener noreferrer">Referencia Horizon</a></li>
      </ul>`,
  }
]);
