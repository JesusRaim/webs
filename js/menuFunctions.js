// FUNCIONES

/**
 * Carga el cuerpo de las distintas seciones.
 */
function loadContent(enlace) {
  const file = 'templates/' + enlace.getAttribute('href').replace('#', '') + '.html';
  const contentDiv = document.getElementById('container');
  fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((html) => {
      contentDiv.innerHTML = html;
    })
    .catch((error) => {
      contentDiv.innerHTML = `<p>Error al cargar el contenido: ${error.message}</p>`;
    });
}

/**
 * Activa CSS para la opcion del menu selecionada.
 * Quita la seleccion que puedo haber en otra secion.
 * 
 * @param {Element} menu Todos los elementos del menu
 * @param {Element} enlace elemento activo
 */
function selectedMenuOption(menu, enlace) {
  menu.forEach((link) => link.classList.remove('active'));
  enlace.classList.add('active');
}

/**
 * Pone el valor al header de la seccion que esta activa
 * @param {Element} enlace 
 */
function headerValue(enlace) {
  const elementHeader = document.getElementById('header');
  const createH3 = document.createElement('h3');

  createH3.textContent = enlace.textContent;
  elementHeader.textContent = "";
  elementHeader.appendChild(createH3);
}

// ACCIONES

const menu = document.querySelectorAll('a[href^="#"]'); // Elementos del menu

/**
 * Evento click que se intercepta en el menu
 */
menu.forEach((enlace) => {
  enlace.addEventListener('click', () => {
    headerValue(enlace);
    selectedMenuOption(menu, enlace);
    loadContent(enlace);
  });
});

  