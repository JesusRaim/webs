import { CATEGORY_ID, RESOURCE_TYPE } from "../constants.js";
import { defineCategoryResources } from "./define-category-resources.js";

export const pcResources = defineCategoryResources(CATEGORY_ID.PC, [
{
    id: "pc-build",
    title: "Configuracion completa del PC",
    description: "Resumen de componentes actuales: CPU, GPU, RAM, placa, almacenamiento, fuente, caja y perifericos.",
    group: "Equipo",
    type: RESOURCE_TYPE.NOTE,
    tags: ["pc", "componentes", "setup"],
    pinned: true,
    detailsHtml: `<dl class="spec-list">
      <div><dt>Motherboard</dt><dd>ASUS PRIME B560-PLUS</dd></div>
      <div><dt>CPU</dt><dd>Intel Core i5-11600KF 3.9GHz</dd></div>
      <div><dt>Refrigeracion CPU</dt><dd>Cooler Master MasterLiquid 240L Core ARGB</dd></div>
      <div><dt>RAM</dt><dd>2x Corsair Vengeance LPX DDR4 3200 PC4-25600 8GB CL16</dd></div>
      <div><dt>GPU</dt><dd>Gigabyte GeForce RTX 3060 Ti Gaming OC LHR 8GB GDDR6</dd></div>
      <div><dt>Disco duro</dt><dd>WD Blue SN570 1TB M.2 NVMe</dd></div>
      <div><dt>Fuente</dt><dd>Nox Hummer GD750 750W 80 Plus Gold</dd></div>
      <div><dt>Pasta termica</dt><dd>Arctic MX-4 Pasta Termica 4 Gramos</dd></div>
      <div><dt>Caja</dt><dd>Be Quiet PURE BASE 500DX USB 3.0 Cristal Templado Negra</dd></div>
      <div><dt>Raton</dt><dd>Razer Basilisk V3</dd></div>
      <div><dt>Cascos</dt><dd>HyperX Cloud II Auriculares Gaming 7.1 Rojos</dd></div>
      <div><dt>Sistema operativo</dt><dd>Windows 11 Pro x64</dd></div>
    </dl>`,
  },
{
    id: "pc-gaming-text",
    title: "Texto rapido Gaming",
    description: "Resumen corto para pegar especificaciones de gaming.",
    group: "Equipo",
    type: RESOURCE_TYPE.SNIPPET,
    tags: ["pc", "gaming", "specs"],
    detailsHtml: `<pre><code>SO: Windows 11 Pro 64-bit
Procesador: Intel Core i5-11600KF 3.9GHz
Memoria: Corsair Vengeance LPX DDR4 3200 PC4-25600 16GB CL16
Graficos: Gigabyte GeForce RTX 3060 Ti Gaming OC LHR 8GB GDDR6</code></pre>`,
  },
{
    id: "pc-full-text",
    title: "Texto completo de especificaciones",
    description: "Resumen completo para pegar caracteristicas del equipo.",
    group: "Equipo",
    type: RESOURCE_TYPE.SNIPPET,
    tags: ["pc", "specs"],
    detailsHtml: `<pre><code>Motherboard: ASUS PRIME B560-PLUS
CPU: Intel Core i5-11600KF 3.9GHz
Refrigeracion CPU: Cooler Master MasterLiquid 240L Core ARGB Kit de Refrigeracion Liquida
RAM: 2x Corsair Vengeance LPX DDR4 3200 PC4-25600 8GB CL16
GPU: Gigabyte GeForce RTX 3060 Ti Gaming OC LHR 8GB GDDR6
Disco duro: WD Blue SN570 1TB M.2 NVMe
Fuente de alimentacion: Nox Hummer GD750 750W 80 Plus Gold
Caja: Be Quiet PURE BASE 500DX USB 3.0 Cristal Templado Negra</code></pre>`,
  },
{
    id: "pc-motherboard",
    title: "ASUS PRIME B560-PLUS",
    description: "Tarjeta madre Intel B560 LGA 1200 ATX.",
    group: "Componentes",
    type: RESOURCE_TYPE.PRODUCT,
    url: "https://www.pccomponentes.com/asus-prime-b560-plus",
    image: "assets/images/pc/ASUS_PRIME_B560-PLUS.jpg",
    contentPath: "src/content/pc/motherboard.html",
    tags: ["motherboard", "asus", "b560", "lga1200"],
  },
{
    id: "pc-cpu",
    title: "Intel Core i5-11600KF",
    description: "Procesador Intel de 11a generacion a 3.9GHz.",
    group: "Componentes",
    type: RESOURCE_TYPE.PRODUCT,
    url: "https://www.pccomponentes.com/intel-core-i5-11600kf-39-ghz",
    image: "assets/images/pc/Intel_Core_i5-11600KF.jpg",
    contentPath: "src/content/pc/cpu.html",
    tags: ["cpu", "intel", "i5", "11600kf"],
  },
{
    id: "pc-cooler",
    title: "Cooler Master MasterLiquid 240L Core ARGB",
    description: "Kit de refrigeracion liquida para CPU.",
    group: "Componentes",
    type: RESOURCE_TYPE.PRODUCT,
    url: "https://www.pccomponentes.com/cooler-master-masterliquid-240l-core-argb-kit-de-refrigeracion-liquida",
    image: "assets/images/pc/Cooler_Master_MasterLiquid_240L.jpg",
    contentPath: "src/content/pc/refrigeracionCPU.html",
    tags: ["refrigeracion", "cooler-master", "argb"],
  },
{
    id: "pc-ram",
    title: "Corsair Vengeance LPX DDR4",
    description: "Memoria RAM DDR4 3200 16GB CL16.",
    group: "Componentes",
    type: RESOURCE_TYPE.PRODUCT,
    url: "https://www.pccomponentes.com/corsair-vengeance-lpx-ddr4-3200-pc4-25600-16gb-2x8gb-cl16-negro",
    image: "assets/images/pc/Corsair_Vengeance_LPX_DDR4.jpg",
    contentPath: "src/content/pc/ram.html",
    tags: ["ram", "corsair", "ddr4"],
  },
{
    id: "pc-gpu",
    title: "Gigabyte GeForce RTX 3060 Ti",
    description: "GPU NVIDIA RTX 3060 Ti Gaming OC LHR 8GB GDDR6.",
    group: "Componentes",
    type: RESOURCE_TYPE.PRODUCT,
    url: "https://www.pccomponentes.com/gigabyte-geforce-rtx-3060-ti-gaming-oc-lhr-8gb-gddr6",
    image: "assets/images/pc/Gigabyte_GeForce_RTX_3060_Ti.jpg",
    contentPath: "src/content/pc/gpu.html",
    tags: ["gpu", "nvidia", "rtx", "3060ti", "gigabyte"],
  },
{
    id: "pc-storage",
    title: "WD Blue SN570 1TB",
    description: "SSD M.2 NVMe de 1TB.",
    group: "Componentes",
    type: RESOURCE_TYPE.PRODUCT,
    image: "assets/images/pc/WD_Blue_SN570_1TB.jpg",
    contentPath: "src/content/pc/almacenamiento.html",
    tags: ["ssd", "nvme", "wd-blue", "almacenamiento"],
  },
{
    id: "pc-psu",
    title: "Nox Hummer GD750",
    description: "Fuente de alimentacion 750W 80 Plus Gold.",
    group: "Componentes",
    type: RESOURCE_TYPE.PRODUCT,
    url: "https://www.pccomponentes.com/nox-hummer-gd750-750w-80-plus-gold",
    image: "assets/images/pc/Nox_Hummer_GD750.jpg",
    contentPath: "src/content/pc/fuenteAlimentacion.html",
    tags: ["fuente", "psu", "nox", "750w"],
  },
{
    id: "pc-thermal-paste",
    title: "Arctic MX-4",
    description: "Pasta termica de alto rendimiento.",
    group: "Componentes",
    type: RESOURCE_TYPE.PRODUCT,
    url: "https://www.pccomponentes.com/arctic-mx-4-pasta-termica-4-gramos",
    image: "assets/images/pc/Arctic_MX-4.jpg",
    contentPath: "src/content/pc/pastaTermica.html",
    tags: ["pasta-termica", "arctic"],
  },
{
    id: "pc-case",
    title: "Be Quiet PURE BASE 500DX",
    description: "Caja ATX negra con cristal templado.",
    group: "Componentes",
    type: RESOURCE_TYPE.PRODUCT,
    image: "assets/images/pc/Be_Quiet_PURE_BASE_500DX.jpg",
    contentPath: "src/content/pc/cajaPC.html",
    tags: ["caja", "be-quiet", "atx"],
  },
{
    id: "pc-mouse",
    title: "Razer Basilisk V3",
    description: "Raton gaming con perfiles DPI 400, 800, 1600 y 3200.",
    group: "Perifericos",
    type: RESOURCE_TYPE.PRODUCT,
    url: "https://www.amazon.es/dp/B097F8H1MC",
    image: "assets/images/pc/Razer_Basilisk_V3.jpg",
    contentPath: "src/content/pc/mouse.html",
    tags: ["raton", "razer", "dpi"],
  },
{
    id: "pc-headset",
    title: "HyperX Cloud II",
    description: "Auriculares gaming 7.1 rojos.",
    group: "Perifericos",
    type: RESOURCE_TYPE.PRODUCT,
    image: "assets/images/pc/HyperX_Cloud.jpg",
    contentPath: "src/content/pc/auriculares.html",
    tags: ["auriculares", "hyperx", "gaming"],
  }
]);
