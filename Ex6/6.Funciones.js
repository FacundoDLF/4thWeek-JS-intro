alert('CHECK IT OUT! Lets go to the Console Log');
console.log(' ---6.Funciones ---');
/* a) Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable
en la consola del navegador.*/
//Solution:
var x,y;
x = 3;
y = 4;

function plus(x,y) {
    return[ x + y]
};

var result = plus(x,y);
console.log('a) '+ result);

/* b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros
no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y
retornar el valor NaN como resultado.*/
//Solution:

x = '3';

if ((typeof x !== 'number') || (typeof y !== 'number') ) {
    alert('ERROR: One of the parameters is Not-A-NUmber')
};

console.log('b) '+ plus(x,y));

/* c) Crear una función validate integer que reciba un número como parámetro y verdadero si es un número entero.
A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros.
En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma
probando que todo siga funcionando igual.*/
//Solution:

var alfa = 21.8;

function valInt(alfa) {
    if (Number.isInteger(alfa)) {
        return alfa + ' Its a whole number';
    }else {
        return alfa + ' Its not a whole number';
    }
};
console.log('c) ' + valInt(alfa));
