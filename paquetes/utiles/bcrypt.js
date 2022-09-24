const bcrypt = require('bcrypt')

const password = '1234Segura!';

// hash(password, numero de rondas del hash, callback)
bcrypt.hash(password, 5, function(error, hash) {
    console.log(hash)

    bcrypt.compare(password, hash, function(err, res) {
        console.log(res)
    })
})