'use strict'

/*Calculadora
-Pida los numeros
-validar que sean numeros
-en el cuerpo de la pagina, en alert y por consola
-que sume, reste, multiplique y divida dos numeros
*/

var numero1 = parseInt(prompt("Introduce el primer numero", 1));
var numero2 = parseInt(prompt("Introduce el segundo numero", 1));
var suma, resta, multiplicacion, division;

while(numero1 < 0 || isNaN(numero1)){
    numero1 = parseInt(prompt("Introduce el primer numero", 1));
}
while (numero2 < 0 || isNaN(numero2)) {
    numero2 = parseInt(prompt("Introduce el primer numero", 1));
}

suma = numero1 + numero2;
resta = numero1 - numero2;
multiplicacion = numero1 * numero2;
division = numero1 / numero2;

var resultado = "La suma es: " +suma+ "<br/>"+
                "La resta es: " +resta+ "<br/>"+
                "La multiplicacion es: " +multiplicacion+ "<br/>"+
                "La division es: " +division+ "<br/>";
var resultadoCMD = "La suma es: " + suma + "\n" +
                "La resta es: " + resta + "\n" +
                "La multiplicacion es: " + multiplicacion + "\n" +
                "La division es: " + division + "\n";

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);