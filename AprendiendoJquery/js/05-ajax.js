$(document).ready(function(){
    // Load :permite hacer peticiones ajax
    //$('#datos').load('https://reqres.in/'); //carga todo el html que mandamos a llamar

    //Get Post 
    $.get("https://reqres.in/api/users", {page: 3}, function(response){
        response.data.forEach((element, index) => {
            $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
        })
    });
    

    $("#formulario").submit(function(e){
        e.preventDefault(); //Este codigo es para que no nos redireccione a la pagina
        var usuario = {
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()
        };
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: usuario,
            beforeSent: function () {
                console.log("Enviando usuario")
            },
            seccess: function (response) {
                console.log(response);
            },
            error: function () {
                console.log("A ocurrido un error");
            },
            timeOut: 2000

        });
      /*  $.post($(this).attr('action'), usuario, function (response) {
            console.log(response);
        }).done(function(){
            alert("Usuario añadido adecuadamente");
        });*/
        return false;
    });

    
});