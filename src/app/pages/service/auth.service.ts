import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CrudLoginService } from './loginService.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements CanActivate{

  constructor(private router:Router , private authService:CrudLoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log("quien sabe")
    console.log(this.authService.estaLogeado());
    if(this.authService.estaLogeado()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
