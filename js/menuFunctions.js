function loadContent(file) {
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

const menu = document.querySelectorAll('a[href^="#"]');

menu.forEach((enlace) => {
  enlace.addEventListener('click', () => {
    const source = 'templates/' + enlace.getAttribute('href').replace('#', '') + '.html';
    loadContent(source);
  });
});

  