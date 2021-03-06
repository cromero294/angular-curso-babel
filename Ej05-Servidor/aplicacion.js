let express = require('express')
let bodyParser = require("body-parser")

let personasRest = require("./apis-rest/personasRest.js")

let app = express()

app.use(bodyParser.json())


//Log
app.use(function(request, response, next){
    console.log("PETICIÓN RECIBIDA:"+request.method+". Recurso:"+request.url+". Fecha:"+new Date())
    next()
})
//Seguridad
app.use(function(request, response, next){
    console.log("Buscando el login y el password...")
    next()
})
//CORS (Cross-origin resource sharing)
app.use(function(request, response, next){
    console.log("CORS")
    //Incluye configuración para BASIC AUTHENTICATION
    response.header("Access-Control-Allow-Origin", "*");
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})

//                                           //
//Esto despues de haber añadido las funciones//
//                                           //
app.use('/', personasRest.router)

app.listen(7000, function(){
    console.log("Esperando peticiones...")
})
