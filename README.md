# Mis Webs

Aplicacion web estatica para centralizar recursos personales: enlaces, comandos, herramientas, documentacion, guias, snippets y fichas de hardware.

## Arquitectura

La aplicacion es una SPA sin build. El navegador carga `index.html`, importa los modulos ES desde `src/scripts/` y pinta la interfaz a partir del catalogo definido en `src/data/catalog.js`.

```text
index.html
src/
  data/
    catalog.js
  scripts/
    app.js
    detail.js
    render.js
    search.js
    utils.js
  styles/
    main.css
  content/
    developer/
    guides/
    knowledge/
    manuals/
    pc/
assets/
  images/
docs/
docker-compose.yml
```

## Organizacion de recursos

* `src/data/catalog.js`: fuente principal de informacion. Contiene categorias y recursos buscables.
* `src/content/`: contenido largo cargado bajo demanda, como guias, manuales y fichas de componentes.
* `assets/images/`: imagenes locales usadas por los recursos.
* `docs/`: documentacion auxiliar del proyecto.

Cada recurso del catalogo puede tener:

* `url`: enlace externo.
* `contentPath`: pagina HTML local para contenido largo.
* `detailsHtml`: detalle corto embebido.
* `commands`: comandos copiables.
* `tags`: etiquetas para busqueda.
* `image`: imagen local.

## Lenguajes y herramientas

* HTML5.
* CSS3 propio.
* JavaScript nativo con modulos ES.
* Docker Compose opcional.
* Nginx Alpine opcional para servir archivos estaticos.

No se usa Bootstrap, Bootstrap Icons, framework frontend, gestor de paquetes, base de datos ni proceso de compilacion.

## Ejecucion

Como la app usa `fetch` para cargar contenido local desde `src/content/`, debe servirse con un servidor estatico.

Opciones:

```bash
python -m http.server 8080
```

o con Docker:

```bash
docker compose up
```

Despues abre:

```text
http://localhost:8080
```

## Como anadir contenido

1. Para un enlace, comando o nota corta, anade un objeto nuevo a `resources` en `src/data/catalog.js`.
2. Para una guia o ficha larga, crea un HTML en `src/content/` y referencia su ruta con `contentPath`.
3. Para imagenes, guarda el archivo en `assets/images/` y usa la ruta en `image`.
4. Usa etiquetas descriptivas en `tags` para mejorar la busqueda.

## Despliegue

El proyecto se puede publicar como archivos estaticos. No requiere base de datos ni configuracion externa para funcionar.
