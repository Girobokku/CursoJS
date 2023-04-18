// Añadir nuevos elementos al fin o inicio de un array
const meses = ['Enero', 'Febrero', 'Marzo'];

meses[3] = 'Abril';

// Agregar al final del arreglo
meses.push('Mayo');


console.log(meses);
console.table(meses);
console.log("\n\n\n");

const carrito = [];

// Definir un producto
const producto = {
    nombre: "Monitor 32\"",
    precio: 400
}

const producto2 = {
    nombre: "iPhone 13 MAX",
    precio: 1300
}

const producto3 = {
    nombre: "Logitech MX Keys",
    precio: 120
}

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);


console.table(carrito);