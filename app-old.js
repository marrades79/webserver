const http = require('http');
http.createServer((req, resp) => {

    resp.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: 'Carlos',
        edad: 40,
        url: req.url
    };

    resp.write(JSON.stringify(salida));
    // resp.write('Hola Mundo');
    //resp.end();
}).listen(8080);
console.log('escuchando');