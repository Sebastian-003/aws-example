const express = require("express")

const app = express()

app.get("/", (req, res) => res.send("<h1>Express con h1</h1>"))

app.listen(8080)
console.log("server on port 8080")


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

//desde la consola ubuntu aws git pull se usa para ver los cambios por ejemplo de un commit que hice desde server.js y quiero ver los cambios en aws y
//despues vuelvo a ejecutar con el comando npm start

//git pull comando aws para traer los cambios


//este comando aws ubuntu redireccionar todo lo que se ejecute en el puertob 8080 al puerto 80
//voy a poder visitar la app tanto en el puerto 80 como en el 8080

//sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080