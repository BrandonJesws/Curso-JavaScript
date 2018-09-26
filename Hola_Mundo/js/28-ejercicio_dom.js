'use strict'

window.addEventListener('load', function(){
    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";
    formulario.addEventListener('submit', function(){
        console.log("Capturado");
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;

        //VALIDACION

        if (nombre.trim() == null || nombre.trim().length == 0) {
            alert("El nombre no es valido");
            document.querySelector("#span_nombre").innerHTML = "Nombre invalido";
            return false;
        }else{
            document.querySelector("#span_nombre").style.display = "none";
        }
        if (apellido.trim() == null || apellido.trim().length == 0) {
            alert("El apellido no es valido");
            return false;
        }
        if (edad == null || edad <= 0 || isNaN(edad)) {
            alert("La edad no es valida");
            return false;
        }

        box_dashed.style.display = "block";
       
        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span");


        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellido;
        p_edad.innerHTML = edad;

       /* var datos_usuario = [nombre, apellido, edad];
        var indice;
        for(indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);

        }*/
        
    });
});

