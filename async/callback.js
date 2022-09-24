// funcion son objetos de primer nivel, pueden ser parametros

// function soyAsincrona(miCallback) {
//   setTimeout(() => {
//     console.log("Estoy siendo asincrona");
//     miCallback();
//   }, 1000);
// }

// console.log("Iniciando proceso...");
// soyAsincrona(function () {
//   console.log("Terminando proceso...");
// });

// function hola(nombre, miCallback) {
//   setTimeout(() => {
//     console.log("Hola, " + nombre);
//     miCallback();
//   }, 1000);
// }

// console.log("Iniciando proceso...");
// hola("Tomas", function () {
//   console.log("Terminando proceso...");
// });

function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("Hola, " + nombre);
    miCallback(nombre);
  }, 1500);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios " + nombre);
    otroCallback();
  }, 1000);
}

console.log("Iniciando proceso...");
hola("Tomas", function (nombre) {
  adios(nombre, function () {
    console.log("Terminando proceso...");
  });
});

// hola("Tomas", function () {});
// adios("Tomas", function () {});
