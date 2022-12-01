import { Categoria } from './../model/categoria.entities';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';
import { ProductoService } from '../service/producto.service';
import { CarritoService } from '../service/carrito.service';
import { CrudLoginService } from '../service/loginService.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  categorias: any
  productos: any

  constructor(private serviceCat : CategoriaService
    , private servicePro : ProductoService
    ,private loginService: CrudLoginService) { 

  }


  ngOnInit() {

   this.serviceCat.findAll().subscribe(e=>{
    this.categorias = e;
   });

   this.servicePro.findAll().subscribe(e=>{
    this.productos = e;
   });
   
  }

  obtenerId(){
    let persona = this.loginService.obtenerSession();
    if(persona){
      return persona.idPer;
    }
    return "avatar";
  }



}
