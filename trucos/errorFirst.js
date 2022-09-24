function asincrona(callback) {
    //
    setTimeout(function() {
        try {
            let a = 3 + z
            callback(null, a);
        } catch (error) {
            // callback(error, null);
            callback(error);
        }
    }, 1000)
}

asincrona(function (error, dato) {
    if(error) {
        console.error('Tenemos un error')
        console.error(error)
        return false;
        // throw error; // NO VA A FUNCIONAR
    }

    console.log(data)
})

// asincrona(function (error, dato) {
//     if(error) {
//         console.error('Tenemos un error')
//         console.error(error)
//         // throw error;
//         return false;
//     }

//     console.log(data)
// })