'use strict'

//Transformacion de textos

var numero = 444;
var texto1 = "Bienvenido al curso de curso JavaScript";
var texto2 = "Es muy buen curso";

var dato = numero.toString();
console.log(dato);

    dato = texto1.toUpperCase(); 
console.log(dato);

    dato = texto1.toLowerCase(); 
console.log(dato);

//CALCULAR LONGITUD

var nombre = "Brandon Jesus";
console.log(nombre.length); 

    nombre = ["hola", "saludos"];
console.log(nombre.length); 

//Concatenar texto

var textoTotal = texto1+ " " +texto2;
console.log(textoTotal);

textoTotal = texto1.concat("  "+texto2);
console.log(textoTotal);

//Buscar palabras en una cadena de texto
var busqueda = texto1.indexOf("curso");
console.log(busqueda);

busqueda = texto1.lastIndexOf("curso");
console.log(busqueda);

//search tambien sirve

//match devuelve un array de los resultados
busqueda = texto1.match(/curso/g);//la hace global para que salgan las 2
console.log(busqueda);

//Obtener texto 

busqueda = texto1.substr(14,5);
console.log(busqueda);

// Obtener una letra

busqueda = texto1.charAt(30);
console.log(busqueda);

//Busca una palabra al inicio de la cadenay si la encuentra regresa un true

busqueda = texto1.startsWith("Bienvenido");
console.log(busqueda);

// Termina con

busqueda = texto1.endsWith("JavaScript");
console.log(busqueda);

//Busca la palabra y retorna booleano

busqueda = texto1.includes("JavaScript");
console.log(busqueda);

//remplazar texto

busqueda = texto1.replace("JavaScript", "Python");
console.log(busqueda);

//cortar texto
busqueda = texto1.slice(14, 22);
console.log(busqueda);

//separa el texto en un array

busqueda = texto1.split(" ");//separa las palabras que estan separadas por un espacio
console.log(busqueda);

//trim

busqueda = texto1.trim();//quita espacios por delante y por detras
console.log(busqueda);
