import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nombre: string = '';
  @Output() nombreCambiado = new EventEmitter<string>();

  apellidos: string = '';
  @Output() apellidosCambiados = new EventEmitter<string>();

  fecha: Date = new Date();
  @Output() fechaCambiada = new EventEmitter<Date>();

  email: string = '';
  @Output() emailCambiado = new EventEmitter<string>();

  foto: string = '';

  skills: Array<string> = new Array<string>();
  @Output() skillsCambiadas = new EventEmitter<Array<string>>();

  constructor() { }

  ngOnInit() {
  }

  cambiarNombre(nuevoNombre: string): void {
    this.nombre = nuevoNombre;
    this.nombreCambiado.emit(this.nombre);
  }

  cambiarApellidos(nuevosApellidos: string): void {
    this.apellidos = nuevosApellidos;
    this.apellidosCambiados.emit(this.apellidos);
  }

  cambiarEmail(nuevoEmail: string): void {
    this.email = nuevoEmail;
    this.emailCambiado.emit(this.email);
  }

  cambiarFecha(nuevaFecha: string): void {
    let fecharr = nuevaFecha.split("/").map(val => parseInt(val));
    this.fecha = new Date(fecharr[2], fecharr[1]-1, fecharr[0]);
    this.fechaCambiada.emit(this.fecha);
  }

  addSkill(skill: string): void {
    this.skills.push(skill);
    this.skillsCambiadas.emit(this.skills);
  }

  removeSkill(): void {
    this.skills.pop();
    this.skillsCambiadas.emit(this.skills);
  }
}
