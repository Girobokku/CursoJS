// .forEach para iterar un array

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

for (let i = 0; i < carrito.length; i++) {
    console.log(`Nombre del producto: ${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

console.log("");

// .forEach()
carrito.forEach(function (producto) {
    console.log(`Nombre del producto: ${producto.nombre} - Precio: ${producto.precio}`);
})
