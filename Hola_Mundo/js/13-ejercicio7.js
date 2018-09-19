'use strict'

var numero = parseInt(prompt('¿De que número quieres la tabla?', 1));
var resultado;

document.write("<h1>Tabla del "+ numero +"</h1>");

for (var i=1;i<=10;i++){
    resultado = numero * i;
    document.write(i+ " x " + numero + " = " + resultado + "<br/>");
}

// Todas las tablas de multiplicar 

document.write("<h1>Todas las tabla del multiplicar</h1><br/>");

for(var x=1;x<=10;x++){
    document.write("<h1>Tabla del " + x + "</h1>");
    for (var e = 1; e <= 10; e++) {
        resultado = x * e;
        document.write(x + " x " + e + " = " + resultado + "<br/>");
    }
}


