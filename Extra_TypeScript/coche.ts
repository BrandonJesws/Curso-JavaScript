interface CocheBase{
	getModelo():string;
	getVelocidad():number;
}

class Coche implements CocheBase{
	public color: string;
	public modelo: string;
	public velocidad: number;

	constructor(modelo: any = null){
		this.velocidad = 0;
		this.color = "Blanco";
		if(modelo == null){
			this.modelo = "BMW Generico";
		}else{
			this.modelo = modelo;
		}
	}
	public getModelo():string{
		return this.modelo;
	}
	public setModelo(modelo: string){
		this.modelo = modelo;
	}
	public getColor():string{
		return this.color;
	}
	public setColor(color: string){
		this.color = color;
	}
	public acelerar(){
		this.velocidad++;
	}
	public frenar(){
		this.velocidad--;
	}
	public getVelocidad():number{
		return this.velocidad;
	}

}

var coche_uno = new Coche("Renault Clio");
var coche_dos = new Coche();
var coche_tres = new Coche();

coche_uno.setColor('Rojo');
coche_dos.setColor('Azul');
coche_tres.setColor('Verde');

console.log("El modelo del coche 1 es: " + coche_uno.getModelo());
console.log("El color del coche 1 es: " + coche_uno.getColor());
/*console.log("El color del coche 2 es: " + coche_dos.getColor());
console.log("El color del coche 3 es: " + coche_tres.getColor());
*/

coche_uno.acelerar();
coche_uno.acelerar();
coche_uno.acelerar();

console.log("La velocidad del coche 1 es: " + coche_uno.getVelocidad());

coche_uno.frenar();
console.log("La velocidad del coche 1 es: " + coche_uno.getVelocidad());

