import { Injectable } from '@angular/core';
import { Zapato } from '../models/zapato';

@Injectable()
export class ZapatoService{

	public zapatos: Array<Zapato>;

	constructor(){
		this.zapatos = [ 
			new Zapato('Rebook Classic', 'Rebook', 'Blanco', 40, true),
			new Zapato('Nike Runner MD', 'Nike', 'Negro', 80, true),
			new Zapato('Adidas Yezzy', 'Adidas', 'Gris', 60, false)
			];
	}
	getTexto(){
		return "Hola Mundo desde un servicio";
	}
	getZapatos(): Array<Zapato>{
		return this.zapatos;
	}
}