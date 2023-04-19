// Congelar un objeto para no poderlo modificar 
"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// .freeze()

Object.freeze(producto);
// producto.disponible = false;
// producto.imagen = "imagen.jpg"

console.log(producto);
console.log(Object.isFrozen(producto));