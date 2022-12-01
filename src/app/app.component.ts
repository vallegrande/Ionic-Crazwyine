import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CrudLoginService } from './pages/service/loginService.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {

  isActive = [false, false, false, false, false, false, false,false,false];
  isHome: boolean;
  url: string;
  persona: any;

  constructor(private router: Router, private loginService: CrudLoginService) {
    this.isHome = true;
  }

  ngOnInit(): void {
  }


  
  clickEvent(index: number) {
    if (!this.isActive[index]) {
      this.isActive = new Array(false, false, false, false, false, false, false,false,false);
      this.isActive[index] = true;
    }

    if (index == 6) {
      this.loginService.cerrarSession();
      this.router.navigate(['/login']).then(() => {
        window.location.reload();
      });
    }
  }

  removerMenu() {
    this.url = this.router.url;
    if (this.url == "/login") {
      this.isHome = false;
    } else {
      this.isHome = true;
    }
  }

  esAdmin() {
    this.persona = this.loginService.obtenerSession();
    if (this.persona) {
      if (this.persona.tipPer == "Empleado") {
        return true;
      }
    }
    return false;
  }

  obtenerNombre(){
    if(this.persona){
      return this.persona.apePer
    }
    return "Usuario";
  }

  obtenerCargo(){
    if(this.persona){
      return this.persona.tipPer
    }
    return "Usuario";
  }

  obtenerId(){
    if(this.persona){
      return this.persona.idPer
    }
    return "avatar";
  }


}
