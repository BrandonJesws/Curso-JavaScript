'use strict'

//JSON - JavaScript Object Notation

var pelicula ={
    titulo: 'Batman vs Superman',
    año: 2017,
    pais: 'Estados Unidos'
};

var peliculas=[
    {titulo: 'La verdad duele', año: 2016, pais: 'Francia'},
    pelicula
]

console.log(peliculas);

var caja_peliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
    var parrafo = document.createElement('p');
    parrafo.append(peliculas[index].titulo + " - " + peliculas[index].año);
    caja_peliculas.appendChild(parrafo);
}


pelicula.titulo = "Superman Begins";
console.log(pelicula.titulo);