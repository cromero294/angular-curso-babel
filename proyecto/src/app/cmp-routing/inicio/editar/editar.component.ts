import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  datosGuardados = false;

  constructor() { }

  ngOnInit() {
  }

  guardar(){
    this.datosGuardados = !this.datosGuardados;
  }

}
