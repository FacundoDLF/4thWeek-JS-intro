console.log(' --- If Else ---');

/* a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(),
si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5”
y sino un alerta con el mensaje “Lower than 0,5”*/
//Solution:
var numRandom = Math.random();
console.log('a) ' + numRandom);

if (numRandom >= 0.5) { // ---> It took to much time 'till I realise I should use period instead of coma.
    alert('Greater than 0,5')
} else {
    alert('Lower than 0,5')
};

/* b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre
los siguientes mensajes de alerta:

      I) “Bebe” si la edad es menor a 2 años
     II) “Nino” si la edad es entre 2 y 12 años
    III) “Adolecente” si la edad es entre 13 y 19 años
     IV) “Joven” si la edad está entre 20 y 30 años
      V) “Adulto” entre 31 y 60 años
     VI) “Adulto mayor” entre 61 y 75 años
    VII) “Anciano” si es mayor a 75 años.*/
//Solution:
