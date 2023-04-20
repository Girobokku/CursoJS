// .map para iterar un array, y sus diferencias con forEach

const carrito = [
    {
        nombre: "Monitor 27\"",
        precio: 500
    },
    {
        nombre: "Monitor 32\"",
        precio: 700
    },
    {
        nombre: "Televisor",
        precio: 100
    },
    {
        nombre: "Tablet",
        precio: 200
    },
    {
        nombre: "Audífonos",
        precio: 300
    },
    {
        nombre: "Teclado",
        precio: 400
    },
    {
        nombre: "Celular",
        precio: 700
    },
]

// .forEach()
carrito.forEach(function (producto) {
    console.log(`Nombre del producto: ${producto.nombre} - Precio: ${producto.precio}`);
})

console.log("");

// Utilizamos .map() para crear un nuevo array con objetos que contienen el nombre y el precio de cada producto
const nuevoArray = carrito.map(function (producto) {
    return { nombre: producto.nombre, precio: producto.precio };
  });

console.log(carrito.length);

nuevoArray.push({ nombre: "Cámara", precio: 400 })

console.log(nuevoArray.length);

// Iteramos sobre el nuevo array y mostramos el nombre y el precio de cada producto
nuevoArray.forEach(function (listadoProductos) {
    console.log(`Producto: ${listadoProductos.nombre}, Precio: ${listadoProductos.precio}`);
})

// .map() permite crear un nuevo array 