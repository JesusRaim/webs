
/**
 * Añade contenido al modal pequeño
 * @param {String} titulo 
 * @param {String HTML} contenido 
 */
function modalText_sm(titulo, contenido) {
    const modalTitle = document.querySelector('#miModal-sm .modal-title');
    const modalBody = document.querySelector('#miModal-sm .modal-body');

    modalTitle.innerHTML = titulo;
    modalBody.innerHTML = contenido;

    const modal = new bootstrap.Modal(document.getElementById('miModal-sm'));
    modal.show();
}

/**
 * Añade contenido al modal grande
 * @param {String} titulo 
 * @param {String HTML} contenido 
 */
function modalText_lg(titulo, contenido) {
    const modalTitle = document.querySelector('#miModal-lg .modal-title');
    const modalBody = document.querySelector('#miModal-lg .modal-body');

    modalTitle.innerHTML = titulo;
    modalBody.innerHTML = contenido;

    const modal = new bootstrap.Modal(document.getElementById('miModal-lg'));
    modal.show();
}

/**
 * Añade contenido al modal muy grande 
 * @param {String} titulo 
 * @param {String HTML} contenido 
 */
async function modalText_xl(titulo, contenido) {
    const modalTitle = document.querySelector('#miModal-xl .modal-title');
    const modalBody = document.querySelector('#miModal-xl .modal-body');

    modalTitle.innerHTML = titulo;
    modalBody.innerHTML = contenido;

    const modal = new bootstrap.Modal(document.getElementById('miModal-xl'));
    modal.show();
}

/**
 * Cierra el modal de Bootstrap (si está abierto) y luego carga nuevo contenido en la página.
 * Esta función se encarga de cerrar el modal con el ID correspondiente antes de ejecutar
 * la función `loadContent()`, garantizando que el contenido principal de la página
 * se actualice correctamente sin dejar el modal visible.
 * 
 * @param {String} path La ruta o URL del contenido que se desea cargar.
 * @param {String} id Identificado del modal que tiene que cerrar.
 */
function closeModalAndLoadContent(path, id) {
    // Obtén el modal
    var modalElement = document.getElementById(id);
    // Obtén la instancia de Bootstrap del modal
    var modalInstance = bootstrap.Modal.getInstance(modalElement);
    // Si existe, lo cierra
    if (modalInstance) {
        modalInstance.hide();
    }
    // Cierra el modal
    modalInstance.hide();
    // Se carga el contenido del fichero directamente en el body de la web
    loadContent(path, null)
}
