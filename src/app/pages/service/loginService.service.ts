import { Empleado } from '../model/empleado.entities';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
    providedIn: 'root'
})


export class CrudLoginService {

    url: string = 'http://localhost:8084/api/loginVerificar';
    persona: any;
    isLogged : boolean = false;

    constructor(private http: HttpClient) {}

    verificar(user: string, pass: string){
        let url = this.url + "/" + user + "/" + pass;
        this.http.get(url).subscribe(result => {
                if (result) {
                    this.isLogged = true;
                    localStorage.setItem('user',JSON.stringify(result));
                } else {
                    this.isLogged =  false;
                }
            }
        );

        return this.http.get(url);
    }

    cerrarSession() {
        localStorage.removeItem('user');
        this.isLogged =  false;
    }

    obtenerSession(){
        if(localStorage.getItem('user')){
            return JSON.parse(localStorage.getItem('user')||"");
        }
        return null;
    }

    estaLogeado() : boolean{
        if(this.obtenerSession()){
            return true;
        }
        return false ;
    }


}
