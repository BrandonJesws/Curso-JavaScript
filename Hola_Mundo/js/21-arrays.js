'use strict'

//Arrays, arreglos o matrices
//una coleccion de datos que puede tener una variable

var nombres = ["Brandon", "Jesus", "Jose", "Beto", 53, false];

var lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "Pascal"); //arreglo como un objeto

console.log(nombres[1]);

//longitud de un array

console.log(nombres.length);

/*
var elemento = parseInt(prompt("que elemento del array quieres?", 0));
if(elemento >= nombres.length){
    alert("Introduce un numero menor a " + nombres.length)
}else{
    alert("El usuario seleccionado es: " + nombres[elemento]);
}*/

document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>");
/*for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+ lenguajes[i] + "</li>");
}*/
/*lenguajes.forEach((elemento)=>{
    document.write("<li>" + elemento + "</li>");
})*/

for(let lenguaje in lenguajes){
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
}
document.write("</ul>");


//----------Busquedas

/*var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP";
});*/
var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");

//Buscar indice
busqueda = lenguajes.findIndex(lenguaje => lenguaje == "JS");

//Buscar si existe algun dato que cumpla una condicion, devuelve booleano

var precios = [10, 20, 50, 80, 12];

var busqueda2 = precios.some(precio => precio > 20);

console.log(busqueda2);

console.log(busqueda);