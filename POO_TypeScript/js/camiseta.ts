//INTERFACE
interface CamisetaBase{
	setColor(color);
	getColor();
}

//DECORADOR
function estampar(logo: string){
	return function(target: Function){
		target.prototype.estampacion = function(): void{
			console.log("Camiseta estampada con el logo de: "+ logo);
		}
	}
}

//CLASE (Molde del objeto)
@estampar("Ideas Cresiendo")
class Camiseta implements CamisetaBase{
	// Propiedades (Caracteristicas del objeto)
	private color: string;
	public modelo: string;
	public marca: string;
	public talla: string;
	public precio: number;

	//CONSTRUCTOR
	constructor(color, modelo, marca, talla, precio){
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio;
	}

	//Metodos (funciones o acciones del objeto)	
	public setColor(color){
		this.color = color;
	}

	public getColor(){
		return this.color;
	}
}

//Clase hija
class Sudadera extends Camiseta {
	public capucha: boolean;

	setCapucha(capucha: boolean){
		this.capucha = capucha;
	}

	getCapucha(): boolean{
		return this.capucha;
	}
}


var camiseta = new Camiseta("Verde", "Manga", "Nike", "G", 14);
console.log(camiseta);
camiseta.estampacion();

var sudadera = new Sudadera("Azul", "Manga Larga", "Nike", "G", 15);
sudadera.setCapucha(true);
sudadera.setColor("Verde");
console.log(sudadera);