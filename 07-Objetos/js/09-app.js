// Sellar un objeto

/*
DIFERENCIA ENTRE FREEZE Y SEAL: FREEZE TE DEJA EL OBJETO TAL CUAL ESTÁ PERO 
SEAL DEJA MODIFICAR LAS LLAVES EXISTENTES DE UN OBJETO. NO PUDIENDO AÑADIR 
NUEVAS NI ELIMINARLAS.
*/

"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// .seal()

Object.seal(producto);

producto.disponible = false;
// producto.imagen = "imagen.jpg"
// delete producto.precio;

console.log(producto);
console.log(Object.isSealed(producto));