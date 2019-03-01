$(document).ready(function () {

    //Slide
    $('.slider').bxSlider({
        mode: 'fade',
        caption: true,
        slideWidth: 1200,
        responsive: true,
        pager: true
    });

    //Post
    var posts = [
        {
            titulo: 'Prueba de Titulo1',
            date: new Date(),
            contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,non provident totam tenetur in molestias dolor? Nam ut, inventore optio eveniet debitis vitae maxime ratione natus nulla ipsa blanditiis aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit.Facilis, non provident totam tenetur in molestias dolor? Nam ut, inventore optio eveniet debitis vitae maxime ratione natus nulla ipsa blanditiis aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit.Facilis non provident totam tenetur in molestias dolor? Nam ut, inventore optio eveniet debitis vitae maxime ratione natus nulla ipsa blanditiis aperiam!'
        },
        {
            titulo: 'Prueba de Titulo2',
            date: new Date(),
            contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,non provident totam tenetur in molestias dolor? Nam ut, inventore optio eveniet debitis vitae maxime ratione natus nulla ipsa blanditiis aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit.Facilis, non provident totam tenetur in molestias dolor? Nam ut, inventore optio eveniet debitis vitae maxime ratione natus nulla ipsa blanditiis aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit.Facilis non provident totam tenetur in molestias dolor? Nam ut, inventore optio eveniet debitis vitae maxime ratione natus nulla ipsa blanditiis aperiam!'
        },
        {
            titulo: 'Prueba de Titulo3',
            date: new Date(),
            contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,non provident totam tenetur in molestias dolor? Nam ut, inventore optio eveniet debitis vitae maxime ratione natus nulla ipsa blanditiis aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit.Facilis, non provident totam tenetur in molestias dolor? Nam ut, inventore optio eveniet debitis vitae maxime ratione natus nulla ipsa blanditiis aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit.Facilis non provident totam tenetur in molestias dolor? Nam ut, inventore optio eveniet debitis vitae maxime ratione natus nulla ipsa blanditiis aperiam!'
        },
        {
            titulo: 'Prueba de Titulo4',
            date: new Date(),
            contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,non provident totam tenetur in molestias dolor? Nam ut, inventore optio eveniet debitis vitae maxime ratione natus nulla ipsa blanditiis aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit.Facilis, non provident totam tenetur in molestias dolor? Nam ut, inventore optio eveniet debitis vitae maxime ratione natus nulla ipsa blanditiis aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit.Facilis non provident totam tenetur in molestias dolor? Nam ut, inventore optio eveniet debitis vitae maxime ratione natus nulla ipsa blanditiis aperiam!'
        },
        {
            titulo: 'Prueba de Titulo5',
            date: new Date(),
            contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,non provident totam tenetur in molestias dolor? Nam ut, inventore optio eveniet debitis vitae maxime ratione natus nulla ipsa blanditiis aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit.Facilis, non provident totam tenetur in molestias dolor? Nam ut, inventore optio eveniet debitis vitae maxime ratione natus nulla ipsa blanditiis aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit.Facilis non provident totam tenetur in molestias dolor? Nam ut, inventore optio eveniet debitis vitae maxime ratione natus nulla ipsa blanditiis aperiam!'
        }
    ];

    posts.forEach((item, index) => {
        var post = `
            <article class="post">
            <h2>${item.titulo}</h2>
            <span class="date">${item.date}</span>
            <p>${item.contenido}</p>
            <a href="#" class="boton-mas">Leer más</a>
             </article>
        `;
        $("#post").append(post);
    });

    // Selector de Tema

    var theme = $('#theme');

    $('#to-green').click(function() {
       theme.attr("href", "css/green.css");
    });
    $('#to-red').click(function() {
       theme.attr("href", "css/red.css");
    });
    $('#to-blue').click(function() {
       theme.attr("href", "css/blue.css");
    });

    //Scroll Arriba

    $('.subir').click(function(){
        console.log("aqui");
        $('html', 'body').animate({
            scrollTop: 0
        }, 1000);
    });

});