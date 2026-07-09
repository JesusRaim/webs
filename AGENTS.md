# Mis Webs

Aplicacion web personal para almacenar, buscar y consultar recursos desde cualquier dispositivo: enlaces, comandos, software, guias, documentacion, snippets y fichas de hardware.

## Stack

* HTML, CSS y JavaScript nativo.
* Modulos ES (`type="module"`).
* Sin framework frontend, sin build, sin base de datos y sin dependencias externas de runtime.
* Docker Compose opcional para servir los archivos estaticos con Nginx.

## Estructura

* `index.html`: punto de entrada de la SPA.
* `src/data/catalog.js`: categorias y catalogo central de recursos.
* `src/scripts/`: modulos de aplicacion (`app.js`, `detail.js`, `render.js`, `search.js`, `utils.js`).
* `src/styles/main.css`: estilos globales, layout, componentes y compatibilidad con contenido migrado.
* `src/content/`: paginas largas reutilizadas como articulos, guias, manuales y fichas de producto.
* `assets/images/`: imagenes locales usadas por fichas y manuales.
* `docs/`: documentacion del proyecto.
* `docker-compose.yml`: despliegue local opcional.

## Convenciones

* Mantener la aplicacion estatica y facil de publicar desde Git.
* Colocar nuevos recursos en `src/data/catalog.js`.
* Colocar contenido largo en `src/content/` y referenciarlo desde el catalogo con `contentPath`.
* Usar nombres descriptivos y modulos con responsabilidad clara.
* Evitar dependencias externas salvo aprobacion explicita.
* Comentar solo la logica no evidente.

## Flujo de trabajo

1. Analiza el proyecto antes de realizar cambios.
2. Para tareas no triviales, propon un plan y espera aprobacion.
3. Realiza una tarea cada vez.
4. Al finalizar, resume los cambios realizados y las comprobaciones ejecutadas.
5. Si tienes menos del 80% de certeza, pregunta en lugar de asumir.
