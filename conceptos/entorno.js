// Las claves de entorno se utilizan para guardar: claves, token, pasword, acceso, credenciales
// Varibles de entorno

// Ejecucion con variables de entorno
// NOMBRE=Tomas node ./conceptos/entorno.js
// NOMBRE=Tomas WEB=tomasotano25.me node ./conceptos/entorno.js

let nombre = process.env.NOMBRE || "Sin nombre";
let web = process.env.WEB || "no tengo Web";
let miWeb = process.env.MI_WEB || "no tengo Web";

// let saludo = "Hola";
console.log("Hola " + nombre);
console.log("Mi web es " + web);
console.log("Mi web es " + miWeb);
