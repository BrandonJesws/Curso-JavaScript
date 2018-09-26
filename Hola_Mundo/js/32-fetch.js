'use strict'

//api rest es un servicio que nos regresa informacion en json

//FETCH Y PETICIONES A SERVICIOS / APIS REST 
//Es un sustituto de peticiones ajax

var divUsuarios = document.querySelector("#usuarios");
var usuarios = [];

fetch('https://jsonplaceholder.typicode.com/users')//Es una promessa por eso tiene .then
    .then(data => data.json())//captura los datos y con callback convierte a jason el data
    .then(users => {
        usuarios = users;
        console.log(usuarios);
        usuarios.map((user, i)=>{
            let nombre = document.createElement('h3');
            nombre.innerHTML = i + ". " + user.name;
            divUsuarios.appendChild(nombre);
            document.querySelector("#loading").style.display = "none";
        });
    });
