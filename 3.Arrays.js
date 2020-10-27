console.log('--- 3.Arrays ---');

/* a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
mostrar por consola los meses 5 y 11 (utilizar console.log)*/
//Solution:
var month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log('a) [5] ' + month[5]);
console.log('  [11] ' + month[11]);

/* b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
//Solution:
console.log('b) ' + month.sort());


/* c) Agregar un elemento al principio y al final del array (utilizar unshift y push).*/
//Solution:
var month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

month.unshift('2019');
month.push('2020');
console.log('c) ' + month);

/* d) Quitar un elemento del principio y del final del array (utilizar shift y pop).*/
//Solution:
var month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

month.shift();
month.pop();
console.log('d) ' + month); // ---> I dont know if I should use the original Array or not so I used the Original.

/* e) Invertir el orden del array (utilizar reverse)*/
//Solution:
var month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

month.reverse();
console.log('e) ' + month);

/* f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/
//Solution:
var month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log('f) ' + month.join('-'));

/* g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/
//Solution:
var month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log('e) ' + month.slice(4,10));