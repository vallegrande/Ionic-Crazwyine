import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table'
import { CrudEmpleadoService } from '../../service/empleadoService.service';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.page.html',
  styleUrls: ['./empleado-list.page.scss'],
  providers: [MessageService, ConfirmationService]
})


export class EmpleadoListPage implements OnInit {

  empleadoDialog: boolean;
  submitted: boolean;
  empleados: any;
  empleadoSelect: Empleado;
  haveError: boolean = true;
  messageError: string;
  isEdit: boolean;
  @ViewChild('dt') dt: Table ;

  constructor(private empleadoService: CrudEmpleadoService,
    private messageService: MessageService,
     private confirmationService: ConfirmationService) { }


  ngOnInit() {
    this.listar();
  }
  

  actualizarEmpleado(empleado: Empleado) {
    this.submitted = true;
    if (this.isEdit) {
      this.editEmpleado(empleado);
    } else {
      this.saveEmpleado(empleado);
    }
    //this.comprobarError();
    this.hideDialog();
  }

  applyFilterGlobal($event:any, stringVal: any) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  saveEmpleado(empleado: Empleado) {
    this.empleadoService.save(empleado).subscribe(res => {
      this.haveError = false;
      this.listar();
      this.sendMessage("Se Registro correctamente","info");
    });
  }

  
  editEmpleado(empleado: Empleado) {
    this.empleadoService.update(empleado).subscribe(res => {
      this.haveError = false;
      this.listar();
      this.sendMessage("Se Edito correctamente","info");
    });
  }


  comprobarError() {
    if (this.haveError) {
      this.messageError = "Fallos en Actualizar Empleado";
      this.sendMessage(this.messageError,"error");
    }
    this.haveError = true;
  }

  
  deleteEmpleado(empleado: Empleado) {
    this.confirmationService.confirm({
      message: 'Estas seguro de Eliminar el empleado?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.empleadoSelect = empleado;
        this.sendMessage('Empleado Eliminado Correctamente',"info");
        this.empleadoService.delete(empleado.idPer).subscribe(res => {
          console.log('Resultado eliminar : ', res);
          this.haveError = false;
          this.listar();
        });
        if (this.haveError) {
          //this.messageError = "Fallos en Eliminar Empleado";
          //this.sendMessage(this.messageError,"error");
        }
        this.haveError = true;
      }
    });
  }


  listar() {
    this.empleadoService.findAll().subscribe((res: any) => {
      this.empleados = res;
      console.log(res);
    })
  }

  
  //Metodo de eventos de componentes


  hideDialog() {
    this.empleadoDialog = false;
    this.submitted = false;
  }

  openNew() {
    this.empleadoSelect = new Empleado();
    this.submitted = false;
    this.empleadoDialog = true;
    this.isEdit = false;
  }

  openEdit(empleado: Empleado) {
    this.empleadoSelect = empleado;
    this.submitted = false;
    this.empleadoDialog = true;
    this.isEdit = true;
  }

  sendMessage(message: string, tipo: string) {
    if(tipo === "error"){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: `${message}`, life: 3000 });
    }else if(tipo=="info"){
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: `${message}`, life: 3000 });
    }else if(tipo=="warn"){
      this.messageService.add({ severity: 'warn', summary: 'Warning', detail: `${message}`, life: 3000 });
    }
  }

}

class Empleado {
  idPer: number;
  nomPer: string;
  apePer: string;
  celPer: number;
  corPer: string;
  dniPer: string;
  usePer: string;
  conPer: string;
  tipPer: string;
  estPer: string;
  idUbi: number;
}
