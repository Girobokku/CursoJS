const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Revisar si 2 números son iguales
console.log(numero1 == numero3);
console.log(numero1 == numero2);

// Comparador estricto (también se fija en el tipo de dato)
console.log("20 y \"20\" son iguales con el compador estricto?")
console.log(numero1 === numero2);
console.log("20 y \"20\" son iguales con el compador estricto tras hacer parseInt?")
console.log(numero1 === parseInt(numero2));
console.log("Type of 20:")
console.log(typeof numero1);
console.log("Type of \"20\":")
console.log(typeof numero2);

// Diferente
const password1 = "admin";
const password2 = "Admin";

console.log("Es diferente password1 de password2?")
console.log(password1 != password2);
console.log("Es diferente numero1 de numero2?")
console.log(numero1 != numero2);
console.log("Es diferente numero1 de numero2?")
console.log(numero1 !== numero2);


