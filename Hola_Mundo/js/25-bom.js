'use strict'
 //Browser object model

 function getBom(){
     console.log(window.innerWidth);
     console.log(window.innerHeight); //Ver tamaño de ventana del dom se podria decir
     console.log(window.location);
 }
function getBomScreen() {
    console.log(screen.width);
    console.log(screen.height); //Ver tamaño de ventana del dom se podria decir
}
function redirect (url){
    window.location.href = url;
}
function abrirVentana(url){
    window.open(url,"","width=500", "height=500");
}
getBom();
getBomScreen();
