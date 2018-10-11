$(document).ready(function(){
    //Mover elemento por la pagina
    $(".elemento").draggable();
    //Redimencionar
    $(".elemento").resizable();
    //Seleccionar y ordenar elementos 
    //$(".lista-seleccionable").selectable();
    $(".lista-seleccionable").sortable({
        update: function(event, ui){
            console.log("Cambio la lista");
        }
    });

    //Drop
    $("#elemento-movil").draggable()
    $("#area").droppable({
        drop: function(){
            console.log("has soltado algo dentro del area");
        }
    });

    //EFECTOS
    $("#mostrar").click(function(){
        $(".cajaEfectos").toggle("shake",4000); //explode, blind, slide, drop, fold, puff, scale, shake//effect
    });
    //Tooltip
    $(document).tooltip();

    //Dialog
    $("#lanzarP").click(function(){
        $("#popup").dialog();
    });
    //DATEPICKER
    $("#calendario").datepicker();

    //Tabs
    $("#pestanas").tabs();
});