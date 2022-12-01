import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CrudLoginService } from './loginService.service';

@Injectable({
  providedIn: 'root'
})

export class AdminAuthService implements CanActivate {

  constructor(private router:Router , private authService:CrudLoginService ) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log("paso por verificar admin");
    let persona = this.authService.obtenerSession();
    if (persona) {
      if (persona.tipPer == "Empleado") {
        return true;
      }
    }
    return false;
  }
  
}