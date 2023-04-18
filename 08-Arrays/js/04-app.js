// Agregar nuevos valores a un array
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

meses[0] = 'Nuevo Mes';
meses[0] = 'Enero';
meses[7] = 'Agosto';
meses[9] = 'Nuevo Mes';
// JS no crea los elementos que no existen en blanco. Se las salta.



console.table(meses);
// Una varibles declarada const se puede modificar en objetos y en arreglos (objects & arrays)
