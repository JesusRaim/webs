# Aplicación Web

Aplicacion web de uso personal que almacena diferentes paginas web para tener un listado de ellas en caso de necesitar alguna en cuanlquier dispositivo.
Tambien incluye algunos manuales y comandos.

## Tecnologías utilizadas
- HTML: Estructura del contenido
- CSS: Estilo y diseño visual
- JavaScript: Interactividad y funcionalidad
- Bootstrap: Libreria CSS para diseño responsivo y componentes reutilizables

## Herramientas de desarrollo
### Visual Studio Code
IDE usado para el desarrollo del codigo.
Extensiones:
- Auto Close Tag: Cierra automaticamente las etiquetas HTML
- Auto Rename Tag: Renombra etiquetas HTML automaticamente al cambiar su apertura o cierre
- Bootstrap 4, Fton Awesome 4, Font Awesome 5 Free & Pro snippets: Fragmentos de codigo para Bootstrap y Font Awesome
- HTML CSS support: Añade soporte para CSS en HTML
- JavaScript (ES6) code snippets: Añade soporte para CSS en HTML
- Live Server: Sirve el proyecto en un servidor local y actualiza automaticamente el navegador al guardar los cambios
- Path Intellisense: Autocompletado de rutas de archivos
- Prettier - Code formatter: Formatea automaticamente el codigo

## Despliegue con Docker
Se ha diseñado un archivo `docker-compose.yml` para desplegar la aplicacion en un contenedor de Docker.
A continuacion, se detallan los comandos para gestionar el contenedor:
- Levantar el contenedor con opcion build (la consola permanecera dentro del contenedor):
    ´docker-compose up --build´
- Detener y eliminar el contenedor:
    ´docker-compose down´
- Acceso a la aplicacion: http://localhost:8080

## Configuracion inicial para desarrollo
Si necesitas configurar el entorno de desarrollo desde cero, sigue estos pasos:
1- Instalar Visual Studio Code
2- (Opcional) Instalar las extensiones listadas anteriormente: Busca las extensiones en el marketplace de VS Code y añadelas a tu instalacion.
3- (Opcional) Instalar Docker y Docker Compose
4- Clonar el repositorio del proyecto