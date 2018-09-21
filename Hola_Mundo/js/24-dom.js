'use strict'

// DOM- Document Object Model
function cambiaColor(color){
    caja.style.background = color;
}

//Seleccionar objeto con byId
//var caja = document.getElementById("micaja");

//Seleccionar objeto con query
var caja = document.querySelector("#micaja");
caja.innerHTML = "¡Texto en la caja desde JS!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola"
console.log(caja);