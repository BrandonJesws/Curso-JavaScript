import { Component, OnInit } from '@angular/core';
import { Zapato } from '../models/zapato';
import { ZapatoService } from '../services/zapatos.service';

@Component({
	selector: 'zapatos',
	templateUrl: './zapatos.component.html',
	providers: [ZapatoService]
	})

export class ZapatosComponent {
	public titulo: string = "Componente de Zapatos";
	public zapatos: Array<Zapato>;
	//public marcas: string[];
	public color: string;
	public miMarca: string;

	constructor(private _zapatoService: ZapatoService){
		this.color = "orange";
		//this.marcas = new Array();
		
	}
	ngOnInit(){
		this.zapatos = this._zapatoService.getZapatos();
		alert(this._zapatoService.getTexto());
	}
	/*getMarcas(){
		this.zapatos.forEach((zapato, index) =>{
			if(!this.marcas.indexOf(zapatos.marca) < 0){
				this.marcas.push(zapato.marca);
			}
		});
		console.log(this.marcas);
	}*/
	getMarca(){
		alert(this.miMarca);
	}
	addMarca(){
		//Se hace un push, pero no hice esa practica 
	}
	onBlur(){
		console.log("Has salido del input");
	}
	mostrarPalabra(){
		console.log(this.miMarca);	
	}

}