'use strict'

/*Programa que 
1. pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array en el cuerpo y en la consola
3. mostrarlo ordenado
4. Invertir el orden
5. mostrar cuantos elementos tiene
6. Buscar de una valor introducido por el usuario que nos diga si esta y cual es su posicion
*/
var numeros = [];
var contador = 0;

 //PEDIR NUMEROS
do{
    var numero = parseInt(prompt("Introduce un numero.", 0));
    if(isNaN(numero)){
        alert("Erro: Introduce un numero.");
    }else{
        numeros.push(numero);
        contador++;
    }
}while(contador != 6);

//Funcion
function imprimir(elementos, titulo){
    document.write("<h2>" + titulo + "</h2>");
    document.write("<ul>");
    elementos.forEach((elemento) => {
        document.write("<li>" + elemento + "</li>");
    });
    document.write("</ul>");
    console.log(numeros);
}

//MOSTRAR EN PANTALLA Y CONSOLA
imprimir(numeros, "Contenido del array");

//ORDENAR
numeros.sort(function(a, b){return a-b});//Para ordenar numericamente y no alfabeticamente
imprimir(numeros, "Por Orden");

//EN REVERSA
numeros.reverse();
imprimir(numeros, "En reversa");

//CUANTOS ELEMENTOS TIENE
document.write("<h2>Elementos array tiene " + numeros.length + " elementos </h2>");


//BUSQUEDA
var buscar = parseInt(prompt("Busca un numero", 0));

var posision = numeros.findIndex(numero => numero == buscar);

if (posision != -1){
    document.write("<h2>Elemento encontrado</h2>");
    document.write("<ul>");
    document.write("<li>Posicion de la busqueda: " + posision + "</li>");
    document.write("</ul>");
}else{
    document.write("<h2>Elemento no encontrado</h2>");
}


