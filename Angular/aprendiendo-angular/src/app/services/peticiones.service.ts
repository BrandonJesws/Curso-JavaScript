import { Injectable } from '@angular/core'; //Injecta nuestro servicio en otra clase
import { HttpClient, HttpHeaders } from '@angular/common/http'; //Permiten hacer peticiones Ajax y modificar las cabezeras
import { Observable } from 'rxjs-compat/Observable'; //Recoje las peticiones

@Injectable()
export class PeticionesService{

	public url: string;

	constructor(
		//Injectar nuestro servicio http
		public _http: HttpClient

		){

		this.url = "https://reqres.in/";
	}
	//Devuelbe un observable
	getUser(userId): Observable<any>{
		return this._http.get(this.url+'api/users/'+userId);
	}

}