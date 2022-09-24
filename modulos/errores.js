function otraFuncion() {
    serompe()
}

function serompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(function() {
        try {
            return 3 + z
        } catch(error) {
            console.error('Error en mi funcion asincrona')
            cb(error)
        }
    }, 1000)
}

try {
    seRompeAsincrona(function (err) { 
         console.log(err.message)
    })
    // otraFuncion()
} catch (err) {
    console.log('Vaya, algo se ha roto...')
    console.error(err.message)
    console.log('Lo hemos capturado')
}

console.log('esto esta aqui')