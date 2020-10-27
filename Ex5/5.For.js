alert('CHECK IT OUT! Lets go to the Console Log');
console.log(' --- 5.For ---');

/* a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript
para mostrar una alerta utilizando cada una de las palabras.*/
//Solution:
var fingers = ['thumb ', 'index ', 'middle ', 'ringFinger ', 'pinky '];

for (var i = 0; i < 5; i++){
    console.log('5.a) Alert')
    alert('5.a) '+ fingers[i])
};

/* b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta
por cada palabra modificada.*/
//Solution:

for (var i =0; i < 5; i++){
    alert('5.b) ' + fingers[i].substring(0,1).toUpperCase()+fingers[i].substring(1,).toLowerCase())
    console.log('5.b) Alert')
};

/* c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo
con un bucle for para ir guardando cada palabra dentro de la variable sentence.
Al final mostrar una única alerta con la cadena completa.*/
//Solution:
var sentence = '';

for (var i = 0; i < 5; i++){
    if (sentence === fingers) {
    }else {
        sentence += fingers[i]
    }/* alert('5.c) ' + sentence) --> From the inside adds one by one*/
};
alert('5.c) ' + sentence);
console.log(' 5.c) Alert');

/* d) Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición,
es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array,
desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final
(utilizar console.log).*/
//Solution:
var empty = '';

for (var i = 0; i < 10; i++){
    empty += i
};
console.log(' 5.d) ' + empty)

