'use strict'

//Programa que muestra todos los numeros que se encuentran entre dos numeros introducidos por el usuario//

var numero1 = parseInt(prompt("Introduce el primer numero:", 1));
if (isNaN(numero1)){
    numero1 = parseInt(prompt("Error: Introduce el primer numero:", 1));
}
var numero2 = parseInt(prompt("Introduce el segundo numero:", 3));
if (isNaN(numero2)) {
    numero2 = parseInt(prompt("Error: Introduce el segundo numero:", 3));
}

if (numero1 < numero2){
    document.write("<h2>Del " + numero1 + " al " + numero2 + " están estos numeros:</h2>");
    for(numero1; numero1<=numero2; numero1++){
        document.write(numero1 + "<br/>");
    }
}else if (numero1 > numero2) {
    document.write("<h2>Del " + numero2 + " al " + numero1 + " están estos numeros:</h2>");
    for (numero2; numero2 <= numero1; numero2++) {
        document.write(numero2+ "<br/>");
    }
}else if (numero1 == numero2){
    document.write("Los numeros son iguales")
}