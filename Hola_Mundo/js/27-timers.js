'use strict'

window.addEventListener('load', function(){
    //Timers
    //Ejecuta una funcion cada cierto tiempo
    function intervalo(){
        
        var tiempo = setInterval(function(){
            console.log("Set interval ejecutado");
            var encabezado = document.querySelector("h1");
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "20px";
            }else{
                encabezado.style.fontSize = "50px";
            }
        }, 1000 );
        return tiempo;
    }
    var tiempo = intervalo();

    var stop = document.querySelector("#stop");
    stop.addEventListener('click', function(){
        alert("Has parado el intervalo de tiempo");
        clearInterval(tiempo);//detiene
    });

    var start = document.querySelector("#start");
    start.addEventListener('click', function () {
        alert("Has iniciado el intervalo de tiempo");
        intervalo();
    });
});

/*

var tiempo = setTimeout(function () { //setTimeout solo se ejecuta 1 vez a diferencia de setInterval
    console.log("Set interval ejecutado");
    var encabezado = document.querySelector("h1");
    if (encabezado.style.fontSize == "50px") {
        encabezado.style.fontSize = "20px";
    } else {
        encabezado.style.fontSize = "50px";
    }
}, 5000);
});
*/