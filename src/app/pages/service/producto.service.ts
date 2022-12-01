import { Empleado } from '../model/empleado.entities';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  url: string ='http://localhost:8084/api/productos';

  constructor(private http: HttpClient) {}

  findAll(){
    return this.http.get(this.url);
  }

  save(empleado : Empleado){
    return this.http.post(this.url,empleado);
  }

  update(empleado : Empleado){
    return this.http.put(this.url,empleado);
  }

  delete(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
