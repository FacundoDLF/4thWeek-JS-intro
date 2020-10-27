console.log('--- 2.Strings ---');

/* a) Crear una variable de tipo string con al menos 10 caracteres y convertir
todo el texto en mayúscula (utilizar toUpperCase).*/
//Solution:
var toUp = 'once upon a time..';

console.log('a) ' + toUp.toUpperCase());


/* b) Crear una variable de tipo string con al menos 10 caracteres y generar un
nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
//Solution:
var firstString = 'Three sad tigers';
var secondString = firstString.substring(0,5);

console.log('b) ' + secondString + ' > firstString: ' + firstString);


/* c) Crear una variable de tipo string con al menos 10 caracteres y generar un
nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
//Solution:
var thirdString = 'House of the rising sun';
var fourthString = thirdString.substring(thirdString.length - 3);


console.log('c) ' + fourthString + ' > thirdString: ' + thirdString);


/* d) Crear una variable de tipo string con al menos 10 caracteres y generar un
nuevo string con la primera letra en mayúscula y las demás en minúscula.
Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/
//Solution:
var fifthString, sixthString;
fifthString = 'this is it';
sixthString = fifthString.toUpperCase()[0] + fifthString.substring(1);

console.log('d) ' + sixthString + ' ---> ' + fifthString);

/* e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio
en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
//Solution:
var fillingTheBlanks = 'Find out where the first blank is in this sentence';

console.log('e) The first blank is it in position number: ' + fillingTheBlanks.indexOf(' ',0));
//---> I know I could remove 0 and It still starts from the beginning.


/* f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string
que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula
(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/
//Solution:
var seventhString = 'hakuna matata';
var space = seventhString.indexOf(' ');
var newString = seventhString[0].toUpperCase() + seventhString.substring(1,space) + seventhString[space] + seventhString.toUpperCase()[space+1] + seventhString.substring(space+2);

console.log('f) ' + newString);
