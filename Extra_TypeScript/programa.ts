module Tienda {
	export class Ropa{
		constructor(public titulo: string){
			alert(titulo);
		}
	}
	export class Informatica{
		constructor(public titulo: string){
			alert("Tienda de tecnologia " +titulo);
		}
	}
}

import Informatica = Tienda.Informatica;

var informatica = new Informatica("Super Tienda");

function arranque(lanzar: string){
	return function(target: Function){
		target.prototype.lanzamiento = function(): void{
			alert(lanzar);
		}
	}
}

@arranque('Lanzamiento del curso de nodejs y angular')
class Programa{

	public nombre: string;
	public version: number;

	setNombre(nombre:string){
		this.nombre = nombre;
	}
	setVersion(version:number){
		this.version = version;
	}
	getNombre():string{
		return this.nombre;
	}
	getVersion():number{
		return this.version;
	}
}

var programa = new Programa();
programa.lanzamiento();

class EditorVideo extends Programa{
	public timeLine: number;

	setTimeLine(timeLine:number){
		this.timeLine = timeLine;
	}
	getTimeLine():number{
		return this.timeLine;
	}

	getAllData():string{
		return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeLine(); 
	}
}

var editor = new EditorVideo();

editor.setNombre("Camtasia studio");
editor.setVersion(8);
editor.setTimeLine(4000);

console.log(editor.getAllData());

//Logica del formulario

var programas = [];

function guardar(){
	var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();
	var programa = new Programa();
	programa.setNombre(nombre);
	programas.push(programa);
	 var list = "";
	 for(var i = 0; i < programas.length; i++){
	 	list = list+"<li>"+programas[i].getNombre()+"</li>";
	 }
	 var listado = <HTMLElement> document.getElementById("listado")
	 listado.innerHTML = list;
	 (<HTMLInputElement>document.getElementById("nombre")).value = "";
}