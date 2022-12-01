import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CarritoPageRoutingModule } from './carrito-routing.module';
import { CarritoPage } from './carrito.page';
import { CarritoItemPageModule } from '../carrito-item/carrito-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarritoPageRoutingModule,
    CarritoItemPageModule
  ],
  declarations: [CarritoPage]
})

export class CarritoPageModule {}
