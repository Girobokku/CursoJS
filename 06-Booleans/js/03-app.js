// Buenas prácticas a la hora de evaluar un Boolean

const autenticado = true;

if(autenticado){
    console.log("Si, puedes ver Netflix.");
} else{
    console.log("No, no puedes verlo.");
}

// Operador ternario
console.log(autenticado ? "Si, está autenticado" : "No, no lo está");