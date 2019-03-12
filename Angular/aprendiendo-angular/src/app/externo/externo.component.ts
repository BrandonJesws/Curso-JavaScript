import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService] //el servicio de llama aqui
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId: any;
  public fecha: any;
  public new_user: any;
  public usuario_guardado: any;

  constructor( 
  	private _peticionesService: PeticionesService
  	) { 
    this.userId = 1;
    this.new_user = {
      "name": "",
      "job": ""
    }
  }

  ngOnInit() {
  	this.cargaUsuario();
    this.fecha = new Date();
  }
  cargaUsuario(){
    this.user = false;
    //se pone el metodo subscribe ya que este es el que recoje el resultado
    this._peticionesService.getUser(this.userId).subscribe(
      result =>{
        this.user = result.data;
      },
      error =>{
        console.log(<any>error);
      }
      );
  }
  onSubmit(form){
    this._peticionesService.addUser(this.new_user).subscribe(
      response =>{
        console.log(response);
        this.usuario_guardado = response;
        form.reset();
      },
      error =>{
        console.log(<any>error);
      }
      );  
  }

}
//El metodo suscribe tiene dos callback, una que recoje el resultado y otra que recoje error por si lo hay
