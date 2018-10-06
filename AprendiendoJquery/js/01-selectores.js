$(document).ready(function(){
    console.log("Estamos listos");

    //Selector ID
     $("#rojo").css("background","red")
               .css("color", "white");
     $("#amarillo").css("background","yellow")
                   .css("color", "green");
     $("#verde").css("background", "green")
                .css("color","white");

    //Selector clases 
    var clase = $('.zebra').css("padding", "5px");

    $(".sinBorde").click(function(){
        $(this).addClass("zebra");
    });

    //Selectores por etiqueta
    var parrafos = $('p').css("cursor","pointer");


    parrafos.click(function(){
        var este = $(this);
        if (este.hasClass("grande")){
            este.removeClass("grande");
        }else{
            este.addClass('grande');
        }
        
    });

    //Selectores de atributos
    $('[title="Google"]').css('background','#ccc');
    $('[title="YouTube"]').css('background', 'blue');


    //otros
   // $('p, a').addClass('margenSuperior');

   //var busqueda = $("#caja").find('.resaltado');
   var busqueda = $("#caja .resaltado");

});