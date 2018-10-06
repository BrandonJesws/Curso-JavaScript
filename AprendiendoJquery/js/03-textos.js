$(document).ready(function(){
    reloadLinks();
    $("#addBoton").click(function(){
        $("#menu").prepend('<li><a href="'+$("#addLink").val()+'"></a></li>'); //añade enlace (append, prepend, before)
        reloadLinks();
    });
    
});

function reloadLinks(){
    $('a').each(function (index) {
        var enlace = $(this).attr('href'); // selecciona textos de href
        var este = $(this);
        este.text(enlace);
    });
}