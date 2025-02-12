const express = require("express")

const app = express()

app.get("/", (req, res) => res.send("hello world with express"))

app.listen(3000)
console.log("server on port 3000")


//el package json es una lista de los modulos que necesita nuestra app osea 
//lo que necesita nuestra app para funcionar en la realidad 