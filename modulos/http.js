const http = require('http')

http.createServer(router).listen(3000)

function router(req, res) {
    // --
    console.log('nueva peticion')
    console.log(req.url)

    res.writeHead(201, { 'Content-Type': 'text/plain' })

    switch(req.url) {
        case "/hola":
            res.write('Hola, que tal');
            res.end()
            break;
        default:
            res.write('Error 404');
            res.end()
    }

    // res.write('Hola, ya se usar HTTP de NodeJS')
    // res.end()
}

console.log('escuchando en el puerto 3000')