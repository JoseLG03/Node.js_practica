var express = require('express');

var app = express();

const pug = require('pug');

app.use(express.static(__dirname + '/public') );

app.get('/', (peticion, respuesta)=>{
    //la información por defecto sera la html de public. Si existe conflicto con el nombre del archivo
    respuesta.render('index.pug',{
        titulo: "PlayerasJS",
        textoParrafo:"xxx"
    });
})

app.listen( 3000, ()=>{
    console.log("Escuhando en el puerto 3000");
});