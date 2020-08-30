var http = require('http');
var fs = require('fs');

http.createServer(function(peticion, respuesta){
    respuesta.writeHead( 200, {'Content-Type': 'text/html'});

    switch(peticion.url){

        case '/':   
            plantilla = "inicio.html";
            break;
        case '/nodejs':   
            plantilla = "sobrenode.html";
            break;    
        case '/ngnix':
            plantilla = "ngnix.html";
            break;    
        default:   
            plantilla = "404.html";
            break;    
    }   

    fs.readFile("./plantillas/" + plantilla , ( error , datos)=>{
        if(error){
            console.log("Error");
        }else{
            respuesta.write(datos);
            respuesta.end();
        }
    } );


}).listen(3000, 'localhost');

console.log('El servidor de muestra en http://localhost:3000');
