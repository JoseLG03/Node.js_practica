var http = require('http');

http.createServer(function(request, respuesta){
    respuesta.writeHead( 200, {'Content-Type': 'text/plain'});
    respuesta.write("Vamos muchachos");
    respuesta.end();
}).listen(3000, 'localhost');

console.log('Servidor arriba http://localhost:3000');