const os = require('os')

// console.log(os.arch()) // arquitectura del dispositivo
// console.log(os.platform()) // plataforma (sistema operativo)

// console.log(os.cpus()) // informacion de la cpu
// console.log(os.cpus().length) // numero de cpu

// console.log(os.constants) // señales del sistema

// console.log(os.freemem()) // memoria libre

const SIZE = 1024
function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }

console.log(kb(os.freemem())) // memoria libre
console.log(mb(os.freemem())) // memoria libre
console.log(gb(os.freemem())) // memoria libre

console.log(gb(os.totalmem())) // memoria total

console.log(os.homedir()) // directorio raiz del usuario
console.log(os.tmpdir()) // directorio temporal

console.log(os.hostname()) // host name
console.log(os.networkInterfaces()) // interfaces de red

