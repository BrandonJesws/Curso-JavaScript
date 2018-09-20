'use strict'

//Plantillas de texto

var nombre = prompt("Mete tu nombre");
var apellidos = prompt("Mete tus apellidos");

var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mi apellidos son: ${apellidos}</h3>
`;

document.write(texto);