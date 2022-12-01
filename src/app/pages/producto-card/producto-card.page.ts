import { Producto } from './../model/producto.entities';
import { Component, Input, OnInit } from '@angular/core';
import { CarritoService } from '../service/carrito.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.page.html',
  styleUrls: ['./producto-card.page.scss'],
})
export class ProductoCardPage implements OnInit {
  @Input() item : Producto;
  

  constructor(private carritoService : CarritoService,
              private toastCtrl : ToastController) { }

  ngOnInit() {
  }

  addItem(){
    this.item.canproElegido = 1 ;
    this.carritoService.addCarrito(this.item);
    this.mostrarMensaje();
  }

  async mostrarMensaje(){
    const toast = await this.toastCtrl.create({
      message: 'Producto agregado',
      mode: 'ios',
      duration: 1000,
      position: 'top',
    })

    toast.present();
  }


}
