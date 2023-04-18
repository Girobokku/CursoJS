const producto = "Monitor 20 Pulgadas";
const precio = " 30 USD";

console.log(producto.concat(precio));
console.log(producto.concat(" en descuento"));
console.log(producto + " con un precio de " + precio);

// Template literals o template strings
// Al acento grave ` se le llama backtick
console.log(`El producto ${producto} tiene un precio de ${precio}`);