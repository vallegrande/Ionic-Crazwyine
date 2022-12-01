import { Categoria } from './../model/categoria.entities';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})

export class CategoriaPage implements OnInit {
  @Input() item: Categoria;

  constructor() { }

  ngOnInit() {
  }

}
