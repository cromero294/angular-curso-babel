import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {

  mostrar = true;
  items = ['item 1', 'item 2', 'item 3'];
  persona = {
    nombre: "Charly",
    apellido: "Falco"
  }
  miMascota = 'canario';
  varOrange = 'orange';

  constructor() { }

  ngOnInit() {
  }

  cambiarMostrar() {
    this.mostrar = !this.mostrar;
  }
}
