// Eliminar elementos con Splice

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

// .pop() y .shift()

/*
Eliminar último elemento de un arreglo...
carrito.pop();
console.table(carrito);
*/

/*
Eliminar del inciio del arreglo...
carrito.shift();
console.table(carrito);
*/

// .splice(x,y)

/*
'x' indica la posición del índice e 'y' indica la cantidad de elementos que se eliminan
Jugando con esto podemos eliminar el primer elemento, uno o varios intermedios, el último...
Ejemplos del uso de .splice(x,y):
*/

carrito.splice(1,1);
// carrito.splice(0,1);
// carrito.splice((carrito.length-1),1);

console.table(carrito);