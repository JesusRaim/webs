
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
