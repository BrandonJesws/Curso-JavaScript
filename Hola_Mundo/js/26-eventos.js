'use strict'

//EVENTO LOAD

window.addEventListener('load', ()=>{
    
//Eventos del raton

    function cambiarColor(){
        var bg = boton.style.background;
        if (bg == "green"){
            boton.style.background = "red";
        }else{
            boton.style.background = "green";
        }
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";
        boton.style.color = "#FFF";
        return true;
    }

    var boton = document.querySelector("#boton");

    // click 

    boton.addEventListener('click',function(){
        cambiarColor();
    });

    //Mouse over
    boton.addEventListener('mouseover', function(){
        boton.style.background = "yellow";
    });

    //Mouse out
    boton.addEventListener('mouseout', function(){
        boton.style.background = "#CCC";
    });

    //Focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function(){
        console.log("[focus] Estas dentro del imput");
    });
    //blur
    input.addEventListener('blur', function () {
        console.log("[blur] Estas fuera del imput");
    });
    //Keydown
    input.addEventListener('keydown', function (event) {
        console.log("pulsando esta tecla", String.fromCharCode(event.keyCode));
    });
    //keypress
    input.addEventListener('keypress', function (event) {
        console.log("tecla presionada", String.fromCharCode(event.keyCode));
    });
    //keyup
    input.addEventListener('keyup', function (event) {
        console.log("[Keyup] Tecla soltada", String.fromCharCode(event.keyCode));
    });
});//final del load