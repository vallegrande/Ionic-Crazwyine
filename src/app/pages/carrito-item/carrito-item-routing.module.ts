import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarritoItemPage } from './carrito-item.page';

const routes: Routes = [
  {
    path: '',
    component: CarritoItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarritoItemPageRoutingModule {}
