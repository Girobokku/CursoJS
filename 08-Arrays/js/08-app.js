// Destructuring de arrays

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

console.log(nombre);

// Destructuring con arrays
const numeros = [10, 20, 30, 40, 50];

// const [primero, segundo, tercero, cuarto, quinto] = numeros;
const [a, b, c, d, e] = numeros;

// console.log(tercero);
console.log(c);

const[primero,segundo, tercero, ...cuarto] = numeros;
console.log(segundo, tercero, cuarto);