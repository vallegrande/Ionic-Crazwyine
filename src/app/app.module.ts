import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdminAuthService } from './pages/service/admin-auth.service';
import { AuthService } from './pages/service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    IonicModule.forRoot(),
    AppRoutingModule,

    BrowserModule, 
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, AuthService, AdminAuthService],
  bootstrap: [AppComponent],
})

export class AppModule {}
