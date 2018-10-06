$(document).ready(function(){

    var caja = $("#caja"); 
    $("#mostrar").hide();

    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();
        caja.fadeTo('low', 1);
        //caja.fadeIn('low');
        //caja.show('fast');
    });
    $("#ocultar").click(function () {
        $(this).hide();
        $("#mostrar").show();
        caja.fadeTo('low', 0);
       // caja.fadeOut('low'); //slideUp y slideDown
       // caja.hide('fast'); //normal, o por milisegundos
    });

    $("#todoenuno").click(function(){
        caja.slideToggle('fast');//toggle, fadeToggle
    });

    $("#animar").click(function(){
        caja.animate({
                        marginLeft: '500px' ,
                        fontSize: '40px',
                        height: '100px'
                    }, 'slow')
            .animate({
                        borderRadius: '900px',
                        marginTop: '80px'
                    }, 'slow')
            .animate({
                        borderRadius: '0px',
                        marginLeft: '0px'
                    }, 'slow')
            .animate({
                        borderRadius: '100px',
                        marginTop: '0px'
                    }, 'slow');
    });

});