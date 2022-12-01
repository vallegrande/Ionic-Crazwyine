import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { EmpleadoListPageRoutingModule } from './empleado-list-routing.module';

// Importacion para reconocer ngModel y las animaciones 
// que algunos componentes necesitan
import { FormsModule } from '@angular/forms';

//Componentes Crud
import {ToolbarModule} from 'primeng/toolbar';
import {FileUploadModule} from 'primeng/fileupload';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ButtonModule} from 'primeng/button';
import {CommonModule} from '@angular/common';
import {InputNumberModule} from 'primeng/inputnumber';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import { EmpleadoListPage } from './empleado-list.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpleadoListPageRoutingModule,
    ButtonModule,
    ConfirmDialogModule,
    ToolbarModule,
    FileUploadModule,
    ToastModule,
    TableModule,
    DialogModule,
    InputNumberModule,
    CalendarModule,
    InputTextModule,
  ],
  declarations: [EmpleadoListPage]
})

export class EmpleadoListPageModule {}
