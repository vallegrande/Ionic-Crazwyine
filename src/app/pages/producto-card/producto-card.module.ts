import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoCardPageRoutingModule } from './producto-card-routing.module';

import { ProductoCardPage } from './producto-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoCardPageRoutingModule
  ],
  declarations: [ProductoCardPage],
  exports:[ProductoCardPage]
})
export class ProductoCardPageModule {}
