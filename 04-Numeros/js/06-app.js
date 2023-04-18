const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(typeof(numero1));
console.log(numero1);
console.log(Number.parseInt(numero1));
console.log(typeof(numero1));
console.log(Number.parseFloat(numero2));
console.log(Number.parseInt(numero3));

// Revisar si un número es entero o no
console.log("Revisar si un número es entero o no: ");
console.log(numero4 + " " + Number.isInteger(numero4));
console.log(numero3 + " " + Number.isInteger(numero3));
console.log(numero2 + " " + Number.isInteger(numero2));
console.log(numero1 + " " + Number.isInteger(Number.parseInt(numero1)));

