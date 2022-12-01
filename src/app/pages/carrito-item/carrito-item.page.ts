import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-carrito-item',
  templateUrl: './carrito-item.page.html',
  styleUrls: ['./carrito-item.page.scss'],
})
export class CarritoItemPage implements OnInit {
  @Input() item : any;
  @Output() incrementar = new EventEmitter();
  @Output() decrementar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


}
