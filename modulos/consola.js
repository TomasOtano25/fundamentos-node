console.log('Ver algo')
console.info('Ver algo')

console.error('Error')
console.warn('Potencial error')


var tabla = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 1,
        b: 'Otra'
    }
]
// datos en forma de tabla o modulos
console.table(tabla)


// Agrupar

console.group('Conversacion')
console.log('Hola')
console.group('bla')
console.log('Bla bla bla')
console.log('Bla bla bla')
console.log('Bla bla bla')
console.groupEnd('bla')
console.log('Adios')
console.groupEnd('Conversacion')

console.log('Otra consola')

function function1() {
    console.group('funcion 1')
    console.log('Esto es de la funcion 1')
    console.log('Esto tambien')
    console.log('Esto tambien')
    function2()
    console.log('Hemos vuelto a la funcion 1')
    console.groupEnd('funcion 1')
}

function function2() {
    // --
    console.group('funcion 2')
    console.log('Ahora estamos en la funcion 2')
    console.groupEnd('funcion 2')
}

console.log('empezamos')
function1();

// --- Contadores

console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')