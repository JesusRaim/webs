
/**
 * Carga paginas html de games en el body actual
 * 
 * @param {String} id identificador del enlace 
 */
function loadLinkGames(id) {
  loadContent('templates/games/', document.getElementById(id));
}

/**
 * Carga pagina html de manulas en el body actual
 * @param {String} id identificador del enlace
 */
function loadLinkManuals(id) {
  loadContent('templates/manuals/', document.getElementById(id));
}

/**
 * Lee archivos HTML
 * @param {String} file path del fcihero html
 * @returns 
 */
async function readFileHTML(file) {
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.text();
  } catch (error) {
    return `<p>Error al cargar el contenido: ${error.message}</p>`;
  }
}

/**
 * Lee un fichero HTML y lo carga en el modal pequeño
 * @param {String} titulo 
 * @param {String} path 
 */
async function loadFileModalText_sm(titulo, path) {
  const contenFile = await readFileHTML(path);
  modalText_sm(titulo, contenFile);
}

/**
 * Lee un fichero HTML y lo carga en el modal grande
 * @param {String} titulo 
 * @param {String} path 
 */
async function loadFileModalText_lg(titulo, path) {
  const contenFile = await readFileHTML(path);
  modalText_lg(titulo, contenFile);
}

/**
 * Lee un fichero HTML y lo carga en el modal muy grande
 * Añade un enlace al fichero en el titulo del modal
 * @param {String} title 
 * @param {String} path 
 */
async function loadFileModalText_xl(title, path) {
  const titleLink = '<a href="#" onclick="closeModalAndLoadContent(\''+path+'\', \'miModal-xl\')">' + title + '</a>'
  const contenFile = await readFileHTML(path);
  modalText_xl(titleLink, contenFile);
}
