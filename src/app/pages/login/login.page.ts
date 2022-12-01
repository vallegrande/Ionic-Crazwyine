import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudLoginService } from '../service/loginService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  implements OnInit {

  user: any;
  pass: any;
  invalidLogin = false;
  seLogeo: boolean;

  constructor(private router: Router, private loginService: CrudLoginService) {
  }

  ngOnInit() {
  }

  verificar() {
    this.loginService.verificar(this.user, this.pass).subscribe(result => {
      if (result) {
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
        this.invalidLogin = false;
      } else {
        this.invalidLogin = true;
      }
    });
  }

  cerrarSession() {
    console.log("home cerrar sesion");
    this.loginService.cerrarSession();
  }



}
