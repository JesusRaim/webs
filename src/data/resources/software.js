import { CATEGORY_ID, RESOURCE_TYPE } from "../constants.js";
import { defineCategoryResources } from "./define-category-resources.js";

export const softwareResources = defineCategoryResources(CATEGORY_ID.SOFTWARE, [
{
    id: "soft-office-online",
    title: "Office Online",
    description: "Microsoft 365 gratuito para la web.",
    group: "Ofimatica",
    type: RESOURCE_TYPE.LINK,
    url: "https://www.microsoft.com/es-es/microsoft-365/free-office-online-for-the-web",
    tags: ["office", "microsoft", "web"],
  },
{
    id: "soft-ventoy",
    title: "Ventoy",
    description: "MultiBoot Pendrive para cargar varias ISO desde una misma unidad USB.",
    group: "Arranque y rescate",
    type: RESOURCE_TYPE.TOOL,
    url: "https://www.ventoy.net/en/index.html",
    tags: ["usb", "boot", "iso"],
    detailsHtml: `<ol>
      <li>Descargar el software.</li>
      <li>Descomprimir el archivo descargado.</li>
      <li>Ejecutar el EXE Ventoy2Disk.</li>
      <li>Seleccionar el pendrive de destino.</li>
      <li>Opcional: elegir MBR para la mayoria de equipos o GPT para equipos con UEFI.</li>
      <li>Opcional: cambiar el lenguaje.</li>
      <li>El pendrive se renombra como Ventoy y queda listo.</li>
      <li>Copiar las ISO dentro del pendrive: Hiren, Windows 10, Windows 11, etc.</li>
    </ol>
    <p>Se pueden meter tantas ISO como quepan en el pendrive.</p>`,
  },
{
    id: "soft-medicat",
    title: "MediCat USB",
    description: "Software de rescate para eliminar contrasenas, analizar equipos, particiones, recuperacion y backups.",
    group: "Arranque y rescate",
    type: RESOURCE_TYPE.TOOL,
    url: "https://medicatusb.com/",
    tags: ["usb", "rescate", "backup", "particiones"],
    detailsHtml: `<ul>
      <li>Eliminar contrasenas.</li>
      <li>Analisis del equipo.</li>
      <li>Particiones de disco duro.</li>
      <li>Recuperacion de datos.</li>
      <li>Hacer backup.</li>
    </ul>`,
  },
{
    id: "soft-technical-city",
    title: "Technical City",
    description: "Comparador de graficas y procesadores.",
    group: "Comparadores",
    type: RESOURCE_TYPE.LINK,
    url: "https://technical.city/es",
    tags: ["gpu", "cpu", "comparador"],
  },
{
    id: "soft-nanoreview",
    title: "NanoReview",
    description: "Comparador de graficas y procesadores.",
    group: "Comparadores",
    type: RESOURCE_TYPE.LINK,
    url: "https://nanoreview.net/en/cpu-compare",
    tags: ["gpu", "cpu", "comparador"],
  },
{
    id: "soft-can-you-run",
    title: "Can You Run It",
    description: "Verificar si un juego corre en el PC.",
    group: "Gaming",
    type: RESOURCE_TYPE.LINK,
    url: "https://www.systemrequirementslab.com/cyri",
    tags: ["juegos", "requisitos", "pc"],
  },
{
    id: "soft-ninite",
    title: "Ninite",
    description: "Descarga e instalacion de programas basicos y gratis.",
    group: "Instaladores",
    type: RESOURCE_TYPE.LINK,
    url: "https://ninite.com/",
    tags: ["instalacion", "programas"],
  },
{
    id: "soft-alternativeto",
    title: "AlternativeTo",
    description: "Buscador de alternativas de software gratis o equivalentes.",
    group: "Catalogos",
    type: RESOURCE_TYPE.LINK,
    url: "https://alternativeto.net/",
    tags: ["alternativas", "software"],
  },
{
    id: "soft-planyourroom",
    title: "Plan Your Room",
    description: "Herramienta para disenar habitaciones.",
    group: "Diseno",
    type: RESOURCE_TYPE.LINK,
    url: "https://www.planyourroom.com/",
    tags: ["diseno", "habitaciones"],
  },
{
    id: "soft-letsenhance",
    title: "LetsEnhance",
    description: "Mejora de calidad de imagenes.",
    group: "Imagenes",
    type: RESOURCE_TYPE.LINK,
    url: "https://letsenhance.io/",
    tags: ["imagenes", "ia", "upscale"],
  },
{
    id: "soft-tome",
    title: "Tome",
    description: "Crear presentaciones.",
    group: "Documentos",
    type: RESOURCE_TYPE.LINK,
    url: "https://tome.app/",
    tags: ["presentaciones", "ia"],
  },
{
    id: "soft-askyourpdf",
    title: "AskYourPDF",
    description: "Subir un PDF y hacer preguntas sobre el documento.",
    group: "Documentos",
    type: RESOURCE_TYPE.LINK,
    url: "https://askyourpdf.com/es",
    tags: ["pdf", "ia", "documentos"],
  },
{
    id: "soft-hyper-v",
    title: "Hyper-V",
    description: "Maquinas virtuales en Windows.",
    group: "Virtualizacion",
    type: RESOURCE_TYPE.NOTE,
    tags: ["windows", "virtualizacion", "hyper-v"],
    detailsHtml: `<p>Recurso para maquinas virtuales en Windows. En la version anterior compartia notas de rescate similares a MediCat: eliminar contrasenas, analisis del equipo, particiones, recuperacion de datos y backup.</p>`,
  },
{
    id: "soft-airdroid-cast",
    title: "AirDroid Cast",
    description: "Permite mandar la pantalla del movil al PC.",
    group: "Movil",
    type: RESOURCE_TYPE.LINK,
    url: "https://www.airdroid.com/es/cast/",
    tags: ["movil", "pantalla", "cast"],
  },
{
    id: "soft-pdfgear",
    title: "PDFgear",
    description: "Herramientas para modificar PDF.",
    group: "Documentos",
    type: RESOURCE_TYPE.LINK,
    url: "https://www.pdfgear.com/",
    tags: ["pdf", "documentos"],
  },
{
    id: "soft-disk-tools",
    title: "Herramientas de particiones",
    description: "DiskGenius, BalenaEtcher y Win32DiskImager.",
    group: "Particiones",
    type: RESOURCE_TYPE.NOTE,
    tags: ["particiones", "discos", "usb"],
    detailsHtml: `<ul>
      <li>DiskGenius.</li>
      <li>BalenaEtcher.</li>
      <li>Win32DiskImager.</li>
    </ul>`,
  },
{
    id: "soft-canva",
    title: "Canva",
    description: "Retocar imagenes y crear disenos.",
    group: "Imagenes",
    type: RESOURCE_TYPE.LINK,
    url: "https://www.canva.com/es_es/",
    tags: ["imagenes", "diseno"],
  },
{
    id: "soft-lunapic",
    title: "LunaPic",
    description: "Editor online para retocar imagenes.",
    group: "Imagenes",
    type: RESOURCE_TYPE.LINK,
    url: "https://www7.lunapic.com/editor/",
    tags: ["imagenes", "editor"],
  },
{
    id: "soft-cutout-cv",
    title: "Foto CV",
    description: "Herramienta para preparar una foto de curriculum.",
    group: "CV",
    type: RESOURCE_TYPE.LINK,
    url: "https://www.cutout.pro/es/passport-photo-maker/upload",
    tags: ["cv", "foto"],
  },
{
    id: "soft-hireflow",
    title: "Hireflow",
    description: "Herramienta para mejorar el CV.",
    group: "CV",
    type: RESOURCE_TYPE.LINK,
    url: "https://www.hireflow.net/",
    tags: ["cv", "empleo"],
  }
]);
