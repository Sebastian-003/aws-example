const express = require("express")

const app = express()

app.get("/", (req, res) => res.send("<h1>Express con h1</h1>"))

app.listen(3000)
console.log("server on port 3000")


//el package json es una lista de los modulos que necesita nuestra app osea 
//lo que necesita nuestra app para funcionar en la realidad 

//en consola el comando cat sirve para leer lo que esta dentro del archivo que hemos seleccionado desde la consola de ubuntu aws

//este comando en ubuntu de aws source ~/.bashrc  indica vuelve a leer las configuraciones que hay un programa nuevo
//npm start & indica que la app va a estar ejecutandose incluaso cuando no usemos la consola 

//como cancelar la ejecucion del programa debo usar el comando killall node y despues ps -a de una forma abreviada
//para ver todas las ejecuciones que hay en produccion aws o tambien con el comando ps -f 
//el comando kill en consola ubuntu con aws se usa para terminar mat4r el proceso por ejemplo kill 13178 que es de node termina con esa ejecucion,
//y si vuelvo a ejecutar ps -a ya no va aparecer esa ejecucion

//etse comando desde visual git diff server.js se usa para ver lo que se ha modificado al momento de hacer un commit volverlo a guardar lo modificado