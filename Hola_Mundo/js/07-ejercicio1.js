'use strict'

//Programa que pide dos numero al usuario y dice cual es mayor, cual es menor y si son iguales
//PLUS: si los datos ingresados no son numeros o son menores iguales o cero, nos vuelve a pedir el numero
var numero1 = Number(prompt("Ingresa el primer numero", 0));
    while(numero1 <= 0 || isNaN(numero1)){
        numero1= Number(prompt("Valor Incorrecto, vuelve a escribirlo", 0));
    }
var numero2 = Number(prompt("Ingresa el segundo numero", 0));
    while (numero2 <= 0 || isNaN(numero2)) {
        numero2 = Number(prompt("Valor Incorrecto, vuelve a escribirlo", 0));
    }
if (numero1 > numero2){
    alert(numero1+ " es el numero mayor y "+ numero2+ " es el menor");

}else if (numero1 < numero2){
    alert(numero2+ " es el numero mayor y " +numero1+ " es el menor");

}else if (numero1 == numero2){
    alert("Los numeros son iguales");
}else{
    alert("Introduce numeros correctos");
}