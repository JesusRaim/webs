import { CATEGORY_ID, RESOURCE_TYPE } from "../constants.js";
import { defineCategoryResources } from "./define-category-resources.js";

export const developerResources = defineCategoryResources(CATEGORY_ID.DEVELOPER, [
{
    id: "dev-all-the-tags",
    title: "All The Tags",
    description: "Referencia de etiquetas HTML5 para desarrollador web.",
    group: "General",
    type: RESOURCE_TYPE.LINK,
    url: "https://allthetags.com/",
    tags: ["html", "referencia"],
  },
{
    id: "dev-devdocs",
    title: "DevDocs",
    description: "Documentacion de lenguajes y tecnologias de desarrollo.",
    group: "General",
    type: RESOURCE_TYPE.LINK,
    url: "https://devdocs.io/",
    tags: ["documentacion", "referencia"],
  },
{
    id: "dev-overapi",
    title: "OverAPI",
    description: "Chuletas de lenguajes de programacion.",
    group: "General",
    type: RESOURCE_TYPE.LINK,
    url: "https://overapi.com/",
    tags: ["cheatsheet", "referencia"],
  },
{
    id: "dev-jsonpath",
    title: "JSONPath",
    description: "Herramienta para practicar y probar expresiones JSONPath.",
    group: "JSON y datos",
    type: RESOURCE_TYPE.LINK,
    url: "https://jsonpath.com/",
    tags: ["json", "jsonpath"],
  },
{
    id: "dev-jsonviewer",
    title: "JSON Viewer",
    description: "Visor online para formatear y explorar JSON.",
    group: "JSON y datos",
    type: RESOURCE_TYPE.LINK,
    url: "https://jsonviewer.stack.hu/",
    tags: ["json", "viewer"],
  },
{
    id: "dev-regex101",
    title: "Regex101",
    description: "Practicar y depurar expresiones regulares.",
    group: "General",
    type: RESOURCE_TYPE.LINK,
    url: "https://regex101.com/",
    tags: ["regex", "testing"],
  },
{
    id: "dev-playcode",
    title: "Playcode",
    description: "Editor online para probar JavaScript y codigo web.",
    group: "JavaScript",
    type: RESOURCE_TYPE.LINK,
    url: "https://playcode.io/new",
    tags: ["javascript", "editor", "playground"],
  },
{
    id: "dev-chromedriver-switches",
    title: "Chromium command line switches",
    description: "Lista de comandos y flags para ChromeDriver/Chromium.",
    group: "Testing",
    type: RESOURCE_TYPE.LINK,
    url: "https://peter.sh/experiments/chromium-command-line-switches/",
    tags: ["chromedriver", "testing", "chrome"],
  },
{
    id: "dev-px-rem",
    title: "Convertidor PX a REM",
    description: "Conversor de pixeles a rem para CSS.",
    group: "CSS",
    type: RESOURCE_TYPE.LINK,
    url: "https://nekocalc.com/es/px-a-rem-conversor",
    tags: ["css", "rem", "px"],
  },
{
    id: "dev-xray",
    title: "Doc XRAY",
    description: "Documentacion para importar resultados de ejecucion con XRAY REST.",
    group: "Testing",
    type: RESOURCE_TYPE.LINK,
    url: "https://docs.getxray.app/display/XRAY/Import+Execution+Results+-+REST",
    tags: ["xray", "testing", "rest"],
  },
{
    id: "dev-mdn",
    title: "MDN Web Docs",
    description: "Documentacion de HTML, CSS, JavaScript y APIs web.",
    group: "JavaScript",
    type: RESOURCE_TYPE.LINK,
    url: "https://developer.mozilla.org/es/",
    tags: ["javascript", "web", "docs"],
  },
{
    id: "dev-ramda",
    title: "Ramda",
    description: "Libreria JavaScript funcional.",
    group: "JavaScript",
    type: RESOURCE_TYPE.LINK,
    url: "https://ramdajs.com/",
    tags: ["javascript", "funcional"],
  },
{
    id: "dev-ramda-cheatsheet",
    title: "Ramda cheatsheet",
    description: "Chuleta de Ramda v0.25.0.",
    group: "JavaScript",
    type: RESOURCE_TYPE.LINK,
    url: "https://evgenykochetkov.github.io/ramda-cheatsheet/",
    tags: ["javascript", "ramda", "cheatsheet"],
  },
{
    id: "dev-petstore",
    title: "Swagger Petstore",
    description: "API de pruebas para Swagger.",
    group: "Testing",
    type: RESOURCE_TYPE.LINK,
    url: "https://petstore.swagger.io/",
    tags: ["swagger", "api", "testing"],
  },
{
    id: "dev-demoqa",
    title: "DemoQA",
    description: "Pagina de pruebas para elementos HTML.",
    group: "Testing",
    type: RESOURCE_TYPE.LINK,
    url: "https://demoqa.com/",
    tags: ["testing", "html"],
  },
{
    id: "dev-reqres",
    title: "Reqres",
    description: "API de pruebas backend.",
    group: "Testing",
    type: RESOURCE_TYPE.LINK,
    url: "https://reqres.in/",
    tags: ["api", "backend", "testing"],
  },
{
    id: "dev-dockerhub",
    title: "Docker Hub",
    description: "Repositorio de imagenes para Docker.",
    group: "Docker",
    type: RESOURCE_TYPE.LINK,
    url: "https://hub.docker.com/",
    tags: ["docker", "imagenes"],
  },
{
    id: "dev-docker-compose-docs",
    title: "DevDocs Docker Compose",
    description: "Ayuda de Docker Compose en DevDocs.",
    group: "Docker",
    type: RESOURCE_TYPE.LINK,
    url: "https://devdocs.io/docker~1.11-compose/",
    tags: ["docker", "compose", "docs"],
  },
{
    id: "dev-maven-repository",
    title: "Maven Repository",
    description: "Buscador de dependencias Java/Maven.",
    group: "Maven",
    type: RESOURCE_TYPE.LINK,
    url: "https://mvnrepository.com/",
    tags: ["maven", "java", "dependencias"],
  },
{
    id: "dev-spring-data-jpa",
    title: "Spring Data JPA",
    description: "Dependencia para conexion con base de datos y acceso a datos con JPA.",
    group: "Maven",
    type: RESOURCE_TYPE.SNIPPET,
    tags: ["java", "spring", "maven", "jpa"],
    detailsHtml: `<p>Nos permite la conexion con la base de datos. Incluye anotaciones y referencia a JpaRepository.</p>
      <pre><code>&lt;dependency&gt;
  &lt;groupId&gt;software.amazon.awssdk&lt;/groupId&gt;
  &lt;artifactId&gt;url-connection-client&lt;/artifactId&gt;
  &lt;version&gt;2.34.1&lt;/version&gt;
  &lt;scope&gt;compile&lt;/scope&gt;
&lt;/dependency&gt;</code></pre>`,
    related: ["dev-jpa-repository", "dev-spring-data-jpa-annotations"],
  },
{
    id: "dev-mysql-driver",
    title: "MySQL Driver",
    description: "Driver de MySQL para aplicaciones Java/Spring.",
    group: "Maven",
    type: RESOURCE_TYPE.SNIPPET,
    tags: ["mysql", "java", "spring", "maven"],
    detailsHtml: `<pre><code>&lt;dependency&gt;
  &lt;groupId&gt;com.mysql&lt;/groupId&gt;
  &lt;artifactId&gt;mysql-connector-j&lt;/artifactId&gt;
  &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</code></pre>`,
  },
{
    id: "dev-lombok",
    title: "Lombok",
    description: "Dependencia para reducir codigo repetitivo en aplicaciones Java.",
    group: "Maven",
    type: RESOURCE_TYPE.SNIPPET,
    tags: ["java", "lombok", "maven"],
    detailsHtml: `<pre><code>&lt;dependency&gt;
  &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
  &lt;artifactId&gt;lombok&lt;/artifactId&gt;
  &lt;optional&gt;true&lt;/optional&gt;
&lt;/dependency&gt;</code></pre>`,
    related: ["dev-lombok-annotations"],
  },
{
    id: "dev-spring-data-jpa-annotations",
    title: "Anotaciones Spring Data JPA",
    description: "Resumen de @Entity, @Id y @GeneratedValue.",
    group: "Spring Boot",
    type: RESOURCE_TYPE.NOTE,
    tags: ["java", "spring", "jpa", "anotaciones"],
    detailsHtml: `<table>
      <thead><tr><th>Anotacion</th><th>Descripcion</th></tr></thead>
      <tbody>
        <tr><td><code>@Entity</code></td><td>Conecta la clase con la base de datos.</td></tr>
        <tr><td><code>@Id</code></td><td>Indica el atributo que contiene la clave primaria.</td></tr>
        <tr><td><code>@GeneratedValue(strategy = GenerationType.IDENTITY)</code></td><td>Usado cuando la clave primaria es autoincremental.</td></tr>
      </tbody>
    </table>`,
  },
{
    id: "dev-lombok-annotations",
    title: "Anotaciones Lombok",
    description: "Resumen de anotaciones frecuentes de Lombok.",
    group: "Spring Boot",
    type: RESOURCE_TYPE.NOTE,
    tags: ["java", "lombok", "anotaciones"],
    detailsHtml: `<table>
      <thead><tr><th>Anotacion</th><th>Descripcion</th></tr></thead>
      <tbody>
        <tr><td><code>@Data</code></td><td>Genera getters y setters.</td></tr>
        <tr><td><code>@NoArgsConstructor</code></td><td>Genera constructor vacio.</td></tr>
        <tr><td><code>@AllArgsConstructor</code></td><td>Genera constructor con todos los argumentos.</td></tr>
        <tr><td><code>@ToString</code></td><td>Genera el metodo ToString.</td></tr>
        <tr><td><code>@EqualsAndHashCode</code></td><td>Genera Equals y HashCode.</td></tr>
      </tbody>
    </table>`,
  },
{
    id: "dev-jpa-repository",
    title: "Interface JpaRepository",
    description: "Explicacion de JpaRepository, operaciones CRUD, consultas derivadas y ejemplo.",
    group: "Spring Boot",
    type: RESOURCE_TYPE.ARTICLE,
    contentPath: "src/content/developer/jpaRepository.html",
    tags: ["java", "spring", "jpa", "repository"],
  },
{
    id: "dev-spring-initializr",
    title: "Spring Initializr",
    description: "Inicializar un proyecto con Spring Boot.",
    group: "Spring Boot",
    type: RESOURCE_TYPE.LINK,
    url: "https://start.spring.io/",
    tags: ["spring", "spring-boot", "java"],
  },
{
    id: "dev-application-properties",
    title: "application.properties",
    description: "Configuracion base de Spring Boot para MySQL y aplicacion sin Tomcat.",
    group: "Spring Boot",
    type: RESOURCE_TYPE.SNIPPET,
    tags: ["spring", "mysql", "configuracion"],
    detailsHtml: `<pre><code># Conexion MySQL
spring.datasource.url=jdbc:mysql://localhost:3306/zona_fit_db
spring.datasource.username=root
spring.datasource.password=admin
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
# Evitar que se cree el esquema de db
spring.jpa.hibernate.ddl-auto=none
# No despliega el detalle de las sentencias SQL
spring.jpa.show-sql=false

# Desactivar tomcat (Aplicacion web)
spring.main.web-application-type=none</code></pre>`,
  },
{
    id: "dev-logback-spring",
    title: "logback-spring",
    description: "Configuracion para reducir los logs visibles de Spring Boot.",
    group: "Spring Boot",
    type: RESOURCE_TYPE.SNIPPET,
    tags: ["spring", "logs", "logback"],
    detailsHtml: `<pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;configuration&gt;
  &lt;appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender"&gt;
    &lt;encoder&gt;
      &lt;pattern&gt;%msg%n&lt;/pattern&gt;
    &lt;/encoder&gt;
  &lt;/appender&gt;

  &lt;root level="info"&gt;
    &lt;appender-ref ref="STDOUT"/&gt;
  &lt;/root&gt;
&lt;/configuration&gt;</code></pre>`,
  }
]);
