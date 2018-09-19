'use strict'

//Funciones Anonimas
//Son funciones que no tienen nombre

var pelicula = function(nombre){
    return "La pelicula es: " + nombre;
}

//CALLBACK
//Son funciones que se pasan como parametros a otra funcion

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame(5, 7, function(dato){
    console.log("La suma es: ", dato); 
},
//Funcion flecha
(dato)=>{
    console.log("La suma por dos es: ", (dato*2));
});