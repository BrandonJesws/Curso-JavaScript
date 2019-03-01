var bicicleta = {
	color: 'rojo',
	modelo: 'bmx',
	frenos: 'disco',
	velocidad_max: '60Km',
	cambiaColor: function(nuevo_color){
		//bicicleta.color = nuevo_color;
		this.color = nuevo_color;
		console.log(this);
	}
};

bicicleta.cambiaColor("Azul");
