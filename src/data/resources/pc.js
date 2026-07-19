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
    id: "pc-mobile-google-pixel-7a",
    title: "Google Pixel 7a 5G 8GB 128GB",
    description: "Móvil actual con Google Tensor G2, pantalla OLED de 6.1 pulgadas y cámara principal de 64 MP.",
    group: "Móvil",
    type: RESOURCE_TYPE.PRODUCT,
    url: "https://www.pccomponentes.com/google-pixel-7a-5g-8gb-128gb-61-carbon",
    image: "assets/images/pc/Google_Pixel_7a_5G_8GB_128GB.jpg",
    tags: ["movil", "google", "pixel", "android"],
    detailsHtml: `<dl class="spec-list">
      <div><dt>Modelo</dt><dd>Google Pixel 7a 5G 8GB 128GB, Carbón</dd></div>
      <div><dt>Sistema operativo</dt><dd>Android 13</dd></div>
      <div><dt>Pantalla</dt><dd>OLED FHD+ de 6.1 pulgadas, 2400 x 1080, 90 Hz, Gorilla Glass 3</dd></div>
      <div><dt>Procesador</dt><dd>Google Tensor G2 con coprocesador Titan M2</dd></div>
      <div><dt>Memoria</dt><dd>8 GB LPDDR5 RAM</dd></div>
      <div><dt>Almacenamiento</dt><dd>128 GB UFS 3.1</dd></div>
      <div><dt>Cámaras traseras</dt><dd>64 MP principal con OIS + 13 MP ultra gran angular de 120°</dd></div>
      <div><dt>Cámara frontal</dt><dd>13 MP</dd></div>
      <div><dt>Vídeo</dt><dd>Hasta 4K a 60 fps con la cámara trasera</dd></div>
      <div><dt>Batería</dt><dd>4385 mAh, carga rápida e inalámbrica Qi</dd></div>
      <div><dt>Conectividad</dt><dd>5G, Wi‑Fi 6E, Bluetooth 5.3, NFC y USB-C 3.2</dd></div>
      <div><dt>SIM</dt><dd>Dual SIM: Nano SIM + eSIM</dd></div>
      <div><dt>Resistencia</dt><dd>IP67 frente al agua y al polvo</dd></div>
      <div><dt>Seguridad</dt><dd>Desbloqueo facial, lector de huellas bajo pantalla y Titan M2</dd></div>
      <div><dt>Dimensiones y peso</dt><dd>152 x 72.9 x 9 mm; 193.5 g</dd></div>
    </dl>`,
  },
{
    id: "pc-mobile-samsung-galaxy-a53-5g",
    title: "Samsung Galaxy A53 5G 6GB 128GB",
    description: "Móvil con pantalla Super AMOLED de 6.5 pulgadas a 120 Hz, cámara principal de 64 MP con OIS y batería de 5000 mAh.",
    group: "Móvil",
    type: RESOURCE_TYPE.PRODUCT,
    url: "https://www.amazon.es/dp/B09QH3JT6P",
    image: "assets/images/pc/Samsung_Galaxy_A53_5G_128GB.jpg",
    tags: ["movil", "samsung", "galaxy", "android"],
    detailsHtml: `<dl class="spec-list">
      <div><dt>Modelo</dt><dd>Samsung Galaxy A53 5G 6GB 128GB, negro</dd></div>
      <div><dt>Sistema operativo</dt><dd>Android 12 con One UI 4.1</dd></div>
      <div><dt>Pantalla</dt><dd>Super AMOLED FHD+ de 6.5 pulgadas, 2400 x 1080, 120 Hz, Gorilla Glass 5</dd></div>
      <div><dt>Procesador</dt><dd>Exynos 1280 Octa-Core de 5 nm</dd></div>
      <div><dt>Memoria</dt><dd>6 GB RAM</dd></div>
      <div><dt>Almacenamiento</dt><dd>128 GB, ampliable mediante microSD hasta 1 TB</dd></div>
      <div><dt>Cámaras traseras</dt><dd>64 MP principal con OIS + 12 MP ultra gran angular + 5 MP macro + 5 MP profundidad</dd></div>
      <div><dt>Cámara frontal</dt><dd>32 MP</dd></div>
      <div><dt>Vídeo</dt><dd>UHD 4K a 30 fps</dd></div>
      <div><dt>Batería</dt><dd>5000 mAh, carga súper rápida de hasta 25 W</dd></div>
      <div><dt>Conectividad</dt><dd>5G, Wi-Fi ac de doble banda, Bluetooth 5.1, NFC y USB-C 2.0</dd></div>
      <div><dt>SIM</dt><dd>Dual SIM Nano-SIM; segunda ranura híbrida para SIM o microSD</dd></div>
      <div><dt>Resistencia</dt><dd>IP67 frente al agua y al polvo</dd></div>
      <div><dt>Seguridad</dt><dd>Lector óptico de huellas bajo la pantalla y Samsung Knox</dd></div>
      <div><dt>Dimensiones y peso</dt><dd>159.6 x 74.8 x 8.1 mm; 189 g</dd></div>
    </dl>`,
  },
{
    id: "pc-gaming-text",
    title: "Texto rapido Gaming",
    description: "Resumen corto para pegar especificaciones de gaming.",
    group: "Equipo",
    type: RESOURCE_TYPE.SNIPPET,
    tags: ["pc", "gaming", "specs"],
    pinned: true,
    pinnedOrder: 1,
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
