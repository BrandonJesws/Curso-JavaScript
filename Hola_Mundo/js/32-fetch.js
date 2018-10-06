'use strict'

//api rest es un servicio que nos regresa informacion en json

//FETCH Y PETICIONES A SERVICIOS / APIS REST 
//Es un sustituto de peticiones ajax

var divUsuarios = document.querySelector("#usuarios");
var divAnton = document.querySelector("#usuario");
var usuarios = [];

    getUsuarios()
    .then(data => data.json())//captura los datos y con callback convierte a jason el data
    .then(users => {
        usuarios = users;
        listadoUsuarios(users);
        
        return getInfo();
    })
    .then(data => {
        console.log(data);

        return getAntonette();
     })
    .then(data => data.json())
    .then(user =>{
        mostrarAnton(user);
        
    })
    .catch(error =>{
        console.log(error);
        alert("Error en la peticion");
    });

function getUsuarios(){
    return fetch('https://jsonplaceholder.typicode.com/users');//Es una promessa por eso tiene .then
}

function getAntonette(){
    return fetch('https://jsonplaceholder.typicode.com/users/2');
}

    function listadoUsuarios (usuarios){
        usuarios.map((user, i) => {
            let nombre = document.createElement('h3');
            nombre.innerHTML = i + ". " + user.name;
            divUsuarios.appendChild(nombre);
            document.querySelector("#loading").style.display = "none";
        });
    }

function mostrarAnton(user) {
        let nombre = document.createElement('h4');
        nombre.innerHTML = user.name;
        divAnton.appendChild(nombre);
    document.querySelector("#usuario #loading").style.display = "none";
}

function getInfo(){ 
    var profesor = {
        nombre: 'Victor',
        apellido: 'Robles',
        url: 'http://victorrobles.es'
    };

    return new Promise((resolve, reject) => {
       var profesorString;
       setTimeout(() => {
           profesorString = JSON.stringify(profesor);
           if (typeof profesorString != 'string' || profesorString == '') return reject('error 1'); //pasa la variable json a un string json
           return resolve(profesorString);
       }, 3000);
       
    })
}