// resolve: nos permite resolver la promesa
// reject: si detecta un error no seguir adelante
// new Promise(function() {})

function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hola, " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Bla bla bla bla...");
      // resolve(nombre);
      reject("Hay un error");
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Adios " + nombre);
      resolve();
    }, 1000);
  });
}

// ---
console.log("Iniciando el proceso...");
hola("Carlos")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(() => {
    console.log("Terminado el proceso.");
  })
  .catch((error) => {
    console.log("Ha habido un error: ");
    console.log(error);
  });

// hola("Carlos")
//   .then((nombre) => adios(nombre))
//   .then(() => {
//     console.log("Terminado el proceso.");
//   });
