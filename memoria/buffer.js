// El dato en la version mas cruda
// Datos que vienen y que van
// Se guarda en memoria

// let buffer = Buffer.alloc(1) // Vamos a Guardar en memoria
// let buffer = Buffer.alloc(4) // Vamos a Guardar en memoria

// let buffer = Buffer.from([1, 2, 3]) // Asigna el valor

let buffer = Buffer.from('hola')

console.log(buffer)
console.log(buffer.toString())

// -- Abecedario

let abs = Buffer.alloc(26);

for(let i = 0; i < 26;i++) {
    abs[i] = i + 97
}

console.log(abs)
console.log(abs.toString())