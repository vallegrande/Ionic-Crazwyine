import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CarritoItemPageRoutingModule } from './carrito-item-routing.module';

import { CarritoItemPage } from './carrito-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarritoItemPageRoutingModule
  ],
  declarations: [CarritoItemPage],
  exports:[CarritoItemPage]
})
export class CarritoItemPageModule {
  
}
