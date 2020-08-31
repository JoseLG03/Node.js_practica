var express = require('express');

var app = express();

const pug = require('pug');

app.use(express.static(__dirname + '/public') );

playerasArray = [
    {color:"Naranja", imagen: "images/camiseta1.png"},
    {color:"Roja", imagen: "images/camiseta2.png"},
    {color:"Azul", imagen: "images/camiseta3.png"},
    {color:"Verde", imagen: "images/camiseta4.png"}
];

app.get('/', (peticion, respuesta)=>{
    //la información por defecto sera la html de public. Si existe conflicto con el nombre del archivo
    respuesta.render('index.pug',{
        titulo: "PlayerasJS",
        textoParrafo:"xxx"
    });
})

app.get('/tienda', (peticion, respuesta)=>{
    respuesta.render('tienda.pug',{
        playera: playerasArray
    });
})

app.listen( 3000, ()=>{
    console.log("Escuhando en el puerto 3000");
});