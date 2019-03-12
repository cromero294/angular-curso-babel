import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-databinding',
  templateUrl: './cmp-databinding.component.html',
  styleUrls: ['./cmp-databinding.component.css']
})
export class CmpDatabindingComponent implements OnInit {

  // miNombre: string | number = "Mario";
  // miNombre: string = "Mario";
  miNombre = "Mario";
  modoEditar = true;
  ph = "Placeholder";
  nombreHijo1 = 'Paquillo';

  personaje = {
    nombre: 'Rickon',
    apellido: 'Stark'
  }

  constructor() {
    // this.miNombre = 5;
  }

  ngOnInit() {
  }

  cambiarModoEditar() {
    this.modoEditar = !this.modoEditar;
  }

  cambiarNombre(nombre: string) {
    // console.dir(nombre);
    this.personaje.nombre = nombre;
  }
}
