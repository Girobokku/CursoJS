// Objetos de objetos

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: "1kg",
            medida: "1m"
        },
        fabricacion: {
            pais: "China",
        }
    }
}

console.log(producto);
console.log("");
console.log(producto.informacion);
console.log(producto.informacion.medidas.peso);
console.log(producto.informacion.medidas.medida);
console.log("");
console.log("País de fabricación:");
console.log(producto.informacion.fabricacion.pais);