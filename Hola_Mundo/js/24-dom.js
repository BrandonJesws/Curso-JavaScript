'use strict'

// DOM- Document Object Model
//Es el arbol de todos los elementos que hay en una pagina web a nivel HTML

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

//CONSEGUIR ELEMENTOS POR SUS ETIQUETAS 

var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);
var contenidoEnTexto = todosLosDivs[2].textContent;
var div2 = todosLosDivs[2];
console.log(contenidoEnTexto);
div2.innerHTML = "Otro texto para div 2";
div2.style.background = "green";
//---------------------------------------------------------------------------
var seccion = document.querySelector("#miseccion");
var valor;
for (valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.appendChild(texto);
    seccion.appendChild(parrafo);
    }
}
var hr = document.createElement("hr");
seccion.appendChild(hr);


//CONSEGUIR ELEMENTOS POR CLASE CSS

var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');

divsAmarillos[0].style.background="yellow";
var div;
for(div in divsRojos){
    if (divsRojos[div].className == "rojo") {
        divsRojos[div].style.background = "red";
    }
}


//con queryselector

var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);//no devuelve todos los elementos

var todoClaseRojo = document.querySelectorAll(".rojo");//Este si devuelve todos los divs
console.log(todoClaseRojo);