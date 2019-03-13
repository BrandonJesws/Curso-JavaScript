'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar archivos de rutas

var project_routes = require('./rutes/project'); //cargamos el archivo de rutas

// middlewares: son capas que se ejecutan antes de ejecutar el resultado de la ejecucion
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //Combierte todo lo que llega a JSON

// CORS

// rutas

app.use('/', project_routes);





/*
app.get('/', (req, res) =>{
	res.status(200).send(
		"<h1>Pagina de inicio</h1>"
	);
});
app.post('/test', (req, res) =>{
	console.log(req.body.nombre);
	console.log(req.query.web);
	console.log(req.params.id);
	res.status(200).send({
		message: "Hola Mundo desde mi API de NodeJS"
	});
});*/

// exportar
module.exports = app;