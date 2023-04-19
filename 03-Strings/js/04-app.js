// Cortar Espacios en Blanco de un String
const producto = "                           Monitor 20 Pulgadas                   ";

console.log(producto);
console.log(producto.length);

// Eliminar espacios del incio y del final
console.log(producto.trimStart());
console.log(producto.trimEnd());

// Eliminar espacios del incio y del final utilizando chaining
console.log(producto.trimStart().trimEnd());