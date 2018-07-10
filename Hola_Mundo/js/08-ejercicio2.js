'use strict'

//Programa que da la suma y la media de los numeros introducidos por el usuario 
// el programa para cuando el usuario mete un numero negativo//

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt('Introduce numeros hasta que metas uno negativo', 0));

    if(isNaN(numero)){
        numero = 0;
    }else if (numero >= 0){
        suma = suma + numero;
        //suma += numero;
        contador++;
    }
}while (numero >= 0)

    var media= suma/contador;
    alert("La suma es: "+ suma);
    alert("La media es: " + media);   