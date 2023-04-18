// Crear un nuevo arreglo con el spread operator
const carrito = [];

// Definir productos
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

let resultado;

resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];




console.log(carrito.length);
console.table(resultado);