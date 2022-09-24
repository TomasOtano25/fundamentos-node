const fs = require('fs')

function leer (ruta, callback) {
    fs.readFile(ruta, (error, data) => {
        // Leido
        callback(data.toString())
    })
}

function escribir (ruta, contenido, callback) {
    fs.writeFile(ruta, contenido, function (err, data) {
        if(err) {
            callback('No he podido escribirlo ', err)
        } else {
            callback('Se ha escrito correctamente')
        }
    })
}

function borrar (ruta, callback) {
    fs.unlink(ruta, callback)
}

escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log)
// leer(__dirname + '/archivo.txt', console.log)
borrar(__dirname + '/archivo1.txt', console.log)