// Hola Mundo en JavaScript
// console.log("Hola Mundo");

// Solicitamos el nombre del usuario y lo guardamos en una variable
const nombre = prompt('¿Cuál es tu nombre?');

// Sacamos por pantalla un mensaje utilizando la anterior variable y alteramos el html de la página web
alert(`Hola ${nombre}`);
document.querySelector('.contenido').innerHTML = `${nombre} está aprendiendo Javascript moderno`;

// Atajo para escribir `console.log(object);`: Escribimos `clg` + Tabulador
// Atajo para escribir `console.table(object);`: Escribimos `clt` + Tabulador
