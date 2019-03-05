import { Component, OnInit } from '@angular/core';
import { Zapato } from '../models/zapato';

@Component({
	selector: 'zapatos',
	templateUrl: './zapatos.component.html'
	})

export class ZapatosComponent {
	public titulo: string = "Componente de Zapatos";
	public zapatos: Array<Zapato>;
	//public marcas: string[];

	constructor(){
		//this.marcas = new Array();
		this.zapatos = [ 
			new Zapato('Rebook Classic', 'Rebook', 'Blanco', 40, true),
			new Zapato('Nike Runner MD', 'Nike', 'Negro', 80, true),
			new Zapato('Adidas Yezzy', 'Adidas', 'Gris', 60, false)
			];
	}
	ngOnInit(){
		console.log(this.zapatos);
	}
	/*getMarcas(){
		this.zapatos.forEach((zapato, index) =>{
			if(!this.marcas.indexOf(zapatos.marca) < 0){
				this.marcas.push(zapato.marca);
			}
		});
		console.log(this.marcas);
	}*/

}