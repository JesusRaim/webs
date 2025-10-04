
/**
 * Fichero que contiene partes de templates HTML pequeñas
 * Para templates HTML grandes, se generara un nuevo fichero HTML
 */ 

/**
 * developer.html
 */

function ficheroApplicationProperties() {
    const template = `<pre><code>
#Conexion MySQL
spring.datasource.url=jdbc:mysql://localhost:3306/zona_fit_db
spring.datasource.username=root
spring.datasource.password=admin
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
# Evitar que se cree el esquema de db
spring.jpa.hibernate.ddl-auto=none
# No despliega el detalle de las sentencias SQL
spring.jpa.show-sql=false

# Desactivar tomcat (Aplicacion web)
spring.main.web-application-type=none
</code></pre>`;

    modalText_lg('application.properties', template);
}

function ficheroLogbackSpring() {
    const template = `<pre><code>
&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;configuration&gt;
    &lt;appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender"&gt;
        &lt;encoder&gt;
&lt;!--            &lt;pattern&gt;[%thread] %-5level: %logger - %msg%n&lt;/pattern&gt; --&gt;
            &lt;pattern&gt;%msg%n&lt;/pattern&gt;
        &lt;/encoder&gt;
    &lt;/appender&gt;

    &lt;root level="info"&gt;
        &lt;appender-ref ref="STDOUT"/&gt;
    &lt;/root&gt;
   
&lt;/configuration&gt;
            </code></pre>`;

    modalText_lg('logback-spring', template);
}

function anotacionesSpringDataJPA() {
    const template = `<table class="table table-bordered table-striped table-hover">
        <thead style="background-color: #e3f2fd;">
            <tr>
                <th>Anotacion</th>
                <th>Descripción</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>@Entity</td>
                <td>Conecta con la base de datos</td>
            </tr>
            <tr>
                <td>@Id</td>
                <td>Le decimos que atributo va a contener la clave primaria de nuestra tabla de base de datos</td>
            </tr>
            <tr>
                <td>@GeneratedValue(strategy = GenerationType.IDENTITY)</td>
                <td>Si la clave primaria de la tabla de la base de datos es autoincrement. Suele ir junto con la anotacion @Id</td>
            </tr>
        </tbody>
    </table>`;

    modalText_lg('Spring Data JPA', template);
}

function anotacionesLombok() {
    const template = `<table class="table table-bordered table-striped table-hover">
        <thead style="background-color: #e3f2fd;">
            <tr>
                <th>Anotacion</th>
                <th>Descripción</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>@Data</td>
                <td>Genera los metodos Getter y Setter de los atributos de nuestra clase</td>
            </tr>
            <tr>
                <td>@NoArgsConstructor</td>
                <td>Genera el constructor vacio a nuestra clase</td>
            </tr>
            <tr>
                <td>@AllArgsConstructor</td>
                <td>Genera el constructor con todos los argumentos a nuestra clase</td>
            </tr>
            <tr>
                <td>@ToString</td>
                <td>Genera el metodo ToString a nuestra clase</td>
            </tr>
            <tr>
                <td>@EqualsAndHashCode/td>
                <td>Genera los metodos Equals y HashCode a nuestra clase</td>
            </tr>
        </tbody>
    </table>`;

    modalText_lg('Lombok', template);
}
