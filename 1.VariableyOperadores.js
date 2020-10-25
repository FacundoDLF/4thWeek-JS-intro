alert('CHECK OUT THE LOG !!');
console.log('--- Variables y Operadores ---');

/* a) Crear dos variables numéricas y utilizar el operador suma
para guardar el valor de la suma de ambos números en una 3er variable.*/
//Solution:

var num1 = 4;
var num2 = 8;
var result = num1 + num2;
console.log('a) El resultado de la SUMA es: ' + result);


/* b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.*/
//Solution:

var string1 = 'Good Night ';
var string2 = 'America!';
var concatenated = string1 + string2;
console.log('b) ' + concatenated);


/* c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
guardando el resultado la suma una 3er variable (utilizar length).*/
//Solution:

var string3, string4, stringLength;

string3 = 'Cause';
string4 = 'Effect';
stringsLength = string3.length + string4.length;

console.log('c) ' + stringsLength + ' --> Cause: length ' + string3.length + ' and Effect: length ' + string4.length);
