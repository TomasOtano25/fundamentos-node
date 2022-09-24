// Procesos secundarios
// ls -la

const { exec, spawn } = require('child_process')

// ejecutar un comando de listado de archivos
exec('dir', (err, stdout, sterr) => {
    if(err) {
        console.log(err.message)
        return false
    }

    console.log(stdout)
})

// ejecuta un comando de node 
exec('node modulos/consola.js', (err, stdout, sterr) => {
    if(err) {
        console.log(err.message)
        return false
    }

    console.log(stdout)
})

// let proceso = spawn('ls', ['-la'])
// let proceso = spawn('dir', [''])

// retorna un objete que describe el proceso
let proceso = spawn('ls', ['-la']);

// console.log(proceso)
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato) {
    console.log("Esta muerto?")
    console.log(proceso.killed)
    console.log(dato.toString())
});

proceso.on('exit', function () {
    console.log('El proceso termino')
    console.log("Esta muerto?")
    console.log(proceso.killed)
})