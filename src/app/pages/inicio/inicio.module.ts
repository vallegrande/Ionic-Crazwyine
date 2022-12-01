import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InicioPageRoutingModule } from './inicio-routing.module';
import { InicioPage } from './inicio.page';
import { SearchbarPages } from "../searchbar/searchbar.module";
import { CategoriaPageModule } from '../categoria/categoria.module';
import { ProductoCardPageModule } from '../producto-card/producto-card.module';



@NgModule({
    declarations: [InicioPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InicioPageRoutingModule,
        SearchbarPages,
        CategoriaPageModule,
        ProductoCardPageModule
    ]
})

export class InicioPageModule {}
