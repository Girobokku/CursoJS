// Destructuring de objetos

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//console.log(producto.nombre);

// const nombre = producto.nombre;

// console.log(nombre);

// Destructuring
const { nombre, precio, disponible } = producto;
//const { precio } = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);