// Agregar nuevos valores a un array

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
meses[0] = 'Nuevo Mes';
meses[0] = 'Enero';
meses[7] = 'Agosto';
meses[9] = 'Nuevo Mes';
// JS no crea los elementos que no existen en blanco. Se los salta.
console.table(meses);
// Una varibles declarada const SÍ SE PUEDE modificar en objetos y en arreglos (objects & arrays)
