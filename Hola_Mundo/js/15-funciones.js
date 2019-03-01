'use strict'

//Funciones
// Es una agrupacion reutilizable de un conjunto de instrucciones

//Definiendo la funcion

function porConsola(numero1, numero2){
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicacion: " + (numero1 * numero2));
    console.log("Division: " + (numero1 / numero2));
    console.log("*******************************************")
}

function porPantalla(numero1, numero2){
    document.write("Suma: " + (numero1 + numero2) + "<br/>");
    document.write("Resta: " + (numero1 - numero2) + "<br/>");
    document.write("Multiplicacion: " + (numero1 * numero2) + "<br/>");
    document.write("Division: " + (numero1 / numero2) + "<br/>");
    document.write("******************************************* <br/>")
}

function calculadora(numero1, numero2, mostrar = false){ /*Parametros*/ 
    //Conjunto de instrucciones a ejecutar

    //return "Hola soy la calculadora";
    if(mostrar == false){
        porConsola(numero1, numero2);
    }else{
        porPantalla(numero1, numero2);
    }
}

//Invocar o llamar la funcion
/*
for(var i=1;i<=10;i++){
    console.log(i);
    calculadora(i, 8);
}*/

//-----Parametros opcionales --------------------------

calculadora(5,8);
calculadora(10,4,true);

