import { Producto } from './../model/producto.entities';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CarritoService {

    static carrito: Array<any> = new Array<any>;
    static selected: Producto;

    addCarrito(pd: any) {
        let hayDuplicado = false;
        CarritoService.carrito.forEach(function (value) {
            if (pd.idPro==value.idPro){
                hayDuplicado = true;
            }
        })     
        if(!hayDuplicado){
            CarritoService.carrito.push(pd);
        }
    }

    removeCarrito(pd: any) {
        const index = CarritoService.carrito.indexOf(pd, 0);
        if (index > -1) {
            CarritoService.carrito.splice(index, 1);
        }
    }

    cleanCarrito(){
        CarritoService.carrito = new Array<any>;
    }

    getCarrito() {
        return CarritoService.carrito;
    }

    changeCantidad(cantidad: number, pd : any){
        CarritoService.carrito.forEach(function (value) {
            if (pd.idPro == value.idPro){
                value.canproElegido += cantidad;
            }
        })     
    }


}
