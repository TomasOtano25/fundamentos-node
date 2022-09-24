// Manejo de imagenes
const sharp = require('sharp')

sharp('original.png')
    .resize(80)
    .toFile('resize.png')

sharp('original.png')
    .grayscale()
    .toFile('backandwhite.png')