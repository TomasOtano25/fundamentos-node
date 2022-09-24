// Los errores: detienen la aplicacion en total

console.log("Hola mundo");

let i = 0;

setInterval(function () {
  console.log(i);
  i++;
  // console.log("Sigo aqui");
  if (i === 5) {
    console.log("forzamos error");
    var a = 3 + z;
  }
}, 1000);

console.log("Segunda instruccion");
