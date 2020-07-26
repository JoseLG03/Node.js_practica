var http = requiere('http');

http.createServer(function(request, respuesta){
    respuesta.writeHead( 200, {'Content-Type': 'text/plain'});
    respuesta.write("Hola Mundo");    
    respuesta.end();

}).listen(3000, 'localhost');

console.log('El servidor de muestra en http://localhost:3000');
