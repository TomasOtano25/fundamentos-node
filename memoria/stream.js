// Archivo grandes dividido por parte

// Stream de lectura

const fs = require('fs')
const stream = require('stream')
const util = require('util')

let data = '';

// Lectura del archivo
let readableStream = fs.createReadStream(__dirname + "/input.txt")

readableStream.setEncoding('UTF8')

// Paquete de datos = chunk
readableStream.on('data', function(chunk) {
    console.log(chunk)
    // console.log(chunk.toString())
    data += chunk;
})

// Cuando termina
readableStream.on('end', function() {
    console.log(data)
})


// --

// Escritura en buffer
process.stdout.write('Hola')
process.stdout.write('que')
process.stdout.write('tal')

// --
// Recibe, modifica y escribe

const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}

util.inherits(Mayus, Transform)

Mayus.prototype._transform = function (chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus)
    cb();
}

// Crear la transformacion

let mayus = new Mayus()

readableStream
    .pipe(mayus)
    .pipe(process.stdout)