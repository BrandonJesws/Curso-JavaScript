'use strict'

var numero = 12;
var numerodos= 3;
var texto = "Hola Mundo";
var boleano = true;

var operacion = numero * numerodos;

console.log("El resultado es "+ operacion);

var numFalso = "50";

console.log(Number(numFalso) + 2); /*Number pasa a numero, puede ser entero, flotante*/
console.log(parseInt(numFalso) + 3); /* Pasa a entero*/
console.log(parseFloat(numFalso) + 4); /* Pasa a flotante*/
console.log(String(numero)+ 4);
/*typeof*/
console.log(typeof boleano);
console.log(typeof numerodos);
console.log(typeof texto);
