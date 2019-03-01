import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
	selector: 'videojuego',
	templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{

	public titulo: string;
	public listado: string;

	constructor(){
		this.titulo= "Componente de videojuegos";
		this.listado= "Listado de los juegos mas populares";

		console.log("Se a cargado el componente");
	}

	ngOnInit(){
		console.log("oninit ejecutado");	
	}

	ngDoCheck(){
		console.log("DoCheck ejecutado");
	}

	ngOnDestroy(){
		console.log("OnDestry ejecutado");
	}

	cambiarTitulo(){
		this.titulo = "Nuevo Titulo";
	}

}