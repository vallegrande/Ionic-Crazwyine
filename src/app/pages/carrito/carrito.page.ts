import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../service/carrito.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  cartItems: Array<any>;

  constructor(private carritoService: CarritoService,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.cartItems = this.carritoService.getCarrito();
  }

  async removerItem(pd: any) {
    const alert = await this.alertCtrl.create({
      header: 'Quitar',
      message: 'Estas seguro de quitar el item?',
      buttons: [
        {
          text: 'Si',
          handler: () => this.carritoService.removeCarrito(pd),
        },
        {
          text: 'No'
        },
      ],
    });
    alert.present();
  }

  aumentar(pd: any) {
    console.log("paso por incrementar");
    console.log(pd)
    this.carritoService.changeCantidad(1,pd);
    this.cartItems = this.carritoService.getCarrito();
  }

  decrementar(pd: any) {
    this.carritoService.changeCantidad(-1,pd);
    this.cartItems = this.carritoService.getCarrito();
  }

}
