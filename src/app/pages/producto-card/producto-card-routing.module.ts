import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoCardPage } from './producto-card.page';

const routes: Routes = [
  {
    path: '',
    component: ProductoCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoCardPageRoutingModule {}
