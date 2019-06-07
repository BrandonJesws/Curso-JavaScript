var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//Los archivos en la carpeta client se cargan 
app.use(express.static('client'));

app.get('/hola', function(req, res){
	res.status(200).send('Hola mundo desde una ruta');
});

var messages = [{
	id: 1,
	text: 'Bienvenido al chat privado de socket.io y nodejs',
	nickname: 'Bot'
}];

//Abriendo conexion a io
//Detecta cada vez que un usuario se conecta
io.on('connection', (socket) => {
	console.log("El nodo con IP: " + socket.handshake.address + " se a conectado...");

	socket.emit('messages', messages);

	socket.on('add-message', (data)=>{
		messages.push(data);
		io.sockets.emit('messages', messages);
	});

});

server.listen(6677, function(){
	console.log('Servidor esta funcionando');
});