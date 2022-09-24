// const process = require('process') es un modulo global

// antes de que el proceso termine
process.on('beforeExit', () => {
    console.log('el proceso ba a terminar');
});

process.on('exit', () => {
    console.log('Ale, el proceso acabo');
    // nos desconectamos de de los hilos
    setTimeout(function () {
        console.log('Esto no se ejecutara')
    }, 0)
});


// excepciones que no se han capturado
process.on('uncaughtException', (err, origen) => {
    console.error('Vaya se nos ha olvidado capturar un error');
    console.error(err);
    // esto si se ejecutara
    setTimeout(() => {
        console.log('Esto viene desde las excepciones')
    }, 0)
});

funcionQueNoExiste();

console.log('Esto si el error no se recoje, no sale')