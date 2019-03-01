'use strict'

//Funciones Anonimas
//Son funciones que no tienen nombre y se puede guardar en una variable
//se usa en callbacks

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
(dato)=>{//si solo es un parametro se puede omitir los parentesis
    console.log("La suma por dos es: ", (dato*2));
});