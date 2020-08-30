var express = require('express');

var app = express();

app.get('/', (peticion, respuesta)=>{
    respuesta.send('Hola mundo con Express');
})

app.listen( 3000, ()=>{
    console.log("Escuhando en el puerto 3000");
});