'use strict'

//LocalStorage

//Comprobar disponibilidad de local storage
if(typeof(localStorage) !== 'undefined'){
    console.log("Local Storage esta disponible");
}else{
    console.log("Local Storage no esta disponible");
}


//Guardar datos en el local storage
localStorage.setItem("titulo", "curso de javascript");

//Recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar Objetos
var usuario = {
    nombre: "Brandon Jesus",
    email: "brandon@live.com",
    web: "brandon.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario)); //convierte el json en string por que no se puede mandar asi

var userjs = JSON.parse(localStorage.getItem("usuario")); //Pasa el string a un json

console.log(userjs);
document.querySelector("#datos").append(" " + userjs.web + " - " + userjs.email);

//Borra
localStorage.removeItem("usuario");

localStorage.clear();