'use strict'

//Hacer un programa que diga si un numero es par o impar
//1.-Ventana 
//2.Validar numero
//Muestra si es par o impar

var number = parseInt(prompt("Introduce Numero", 0));

while(isNaN(number)){
    number = parseInt(prompt("Introduce Numero", 0));
}

if(number % 2 == 0){
    alert("El numero es par");
}else{
    alert("El numero es impar");
}