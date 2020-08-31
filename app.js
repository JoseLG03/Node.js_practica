var express = require('express');

var app = express();

const pug = require('pug');

app.use(express.static(__dirname + '/public') );

playerasArray = [
    {color:"naranja", imagen: "/images/camiseta1.png"},
    {color:"roja", imagen: "/images/camiseta2.png"},
    {color:"azul", imagen: "/images/camiseta3.png"},
    {color:"verde", imagen: "/images/camiseta4.png"}
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

app.get('/tienda/comprar/:color', (peticion, respuesta)=>{
    
    let datosDeCamiseta = playerasArray.filter( (item)=>{
        if( peticion.params.color == item.color){
            return item;
        }
    })[0];

    respuesta.render('detalles.pug',{
        color: peticion.params.color,
        datos: datosDeCamiseta
    });
})

app.listen( 3000, ()=>{
    console.log("Escuhando en el puerto 3000");
});