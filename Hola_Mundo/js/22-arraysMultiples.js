'use strict'

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'El gran torino'];

var cine = [categorias, peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][2]);

/* --------------------------------------------------------------
//Añadir elementos

var elemento = "";

do{
    elemento = prompt("Introduce una pelicula:");
        peliculas.push(elemento);
}while(elemento != "ACABAR");

//Eliminar el ultimo elemento
peliculas.pop();
*/
//peliculas.push("Batman");

// ---------Eliminar elemento

var indice = peliculas.indexOf("El gran torino");

console.log(indice);

if(indice > -1){
    peliculas.splice(indice);
}

// convertir un array en texto

var peliculasString = peliculas.join();

console.log(peliculasString);

// Convertir un texto a array

var cadena = "texto1, texto2, texto3";

var cadena_array = cadena.split(", ");

console.log(cadena_array);

// Ordenar array

peliculas.sort();
console.log(peliculas);

//ordenar alreves
peliculas.reverse();
console.log(peliculas);
 //