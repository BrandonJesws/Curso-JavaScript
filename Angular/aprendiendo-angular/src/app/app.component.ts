import { Component } from '@angular/core';

import { configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'aprendiendo-angular';
  public mostrar_videojuegos: boolean = true;
  public descripcion = configuracion.descripcion;
  public config; 

  constructor(){
  	this.title= configuracion.titulo;
  	this.config = configuracion;
  }

  ocultarVideojuegos(value: boolean){
  	this.mostrar_videojuegos = value;
  }
}
