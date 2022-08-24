"use strict";
exports.__esModule = true;
require("dotenv/config");
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
console.log(process.env.FULL_NAME); //después de declararlo en Bash ya aparece
console.log(process.env.NODE_ENV);
app.get("/env", function (req, res) {
    res.json({
        environment: process.env.NODE_ENV
    });
});
app.get("/hola", function (req, res) {
    res.json({
        message: "Hola ke ase don omar"
    });
});
app.listen(port, function () {
    console.log("server iniciado en ".concat(port));
});
/*
Heroku:
-Web de hosting tipo Netlify, donde se pueden hostear sin cargos las apps que generemos.
-Se pueden subir mediante su CLI o conectando a partir de un repo de Github
-Se maneja con "Dynos" que son unidades de medida para controlar lo que la app consume. Si no hay requests en 30 minutos se "duerme" la app para que no gaste pero al reactivarse puede generar lentitud.

Continuous Integration:
-https://www.atlassian.com/continuous-delivery/continuous-integration
-https://en.wikipedia.org/wiki/Continuous_integration
-La integración continua (continuous integration en inglés) es una práctica de ingeniería de software que consiste en hacer integraciones automáticas de un proyecto lo más a menudo posible para así poder detectar fallos cuanto antes. Entendemos por integración la compilación y ejecución de pruebas de todo un proyecto.

El proceso suele ser: cada cierto tiempo (horas), descargarse las fuentes desde el control de versiones (por ejemplo CVS, Git, Subversion, Mercurial o Microsoft Visual SourceSafe) compilarlo, ejecutar pruebas y generar informes.


Para hacer la integración, se realizan varios pasos antes de pasar al "live"
• Tests (Correr los tests que están en el comando "test" del package, que los configuramos nosotros. Se pueden ejecutar en Github mismo)
• Build (compilar todo a lo que pueden leer los navegadores ej: Typescript)
• Start (dist, output)

En todas las páginas como Heroku, se usan los scripts "test", "build", "start"
También es clave que estén declaradas las dependencias para que Heroku instale por ejemplo Typescript antes de correr los tests o build.

Heroku expone los proyectos (para que ingrese el público) a través de un puerto, como lo hacemos con Express.js.
Ese puerto no lo decidimos nosotros como veníamos haciendo con localhost:xxxx
sino que nos lo da Heroku en una variable de ambiente (env)
La podemos declarar en una variable de modo que cuando lo trabajemos localmente tenga un valor, y cuando esté subida a Hk tenga el que nos indica la plataforma

• Todos los proyectos en los que trabajemos tienen por lo menos 2 ambientes (enviroments) uno de prueba (como estábamos haciendo con Firebase) donde van a estar datos rotos, bugs, pruebas, etc. y uno de producción, que es la que utilizan los usuarios finales. El de "prueba" o "local" la compu del dev, es [DESARROLLO]. El entorno donde se ejecuta el software finalmente para los usuarios, es [PRODUCCIÓN].

Por ejemplo la variable del puerto se va a llamar
const port = process.env.PORT || 3000
En este caso el enviroment define la variable PORT (en mayúsculas porque no va a cambiar nunca) y si no existe (mi compu) que use el 3000





Para hacer deploy en Heroku
Inicializo y subo el repo local a Github (con remote)
Creo una "App" nueva en Hku
Deploy
(sólo la primera vez) Conecto la cuenta de Github
Uso el buscador de Hku para encontrar el repo y le doy "conectar"
Enable automatic deploys
Ahí se activa el deploy cada vez que hago un cambio o está el botón de hacer el deploy manual.
Una vez que está todo listo, sólo desde VSCode, haciendo cambios y commiteandolos y pusheandolos, se actualiza la URL final de Heroku


Para usar dentro de Heroku la variable de entorno, puedo declararla en mi terminal
para simularla.

Dentro de la terminal de Bash puedo declarar variables de entorno usando el comando "export"

export VAR_NAME=String

Puedo probar si se declaró bien usando el comando "echo $VAR_NAME"

Se puede declarar así pero se hace de otra manera:
con la variable NODE_ENV que lo que hace es tener un valor de "production" o "development"
entonces con eso podemos setear cosas para la versión de desarrollo y la versión final

Se usa la librería "dotenv"
*/
