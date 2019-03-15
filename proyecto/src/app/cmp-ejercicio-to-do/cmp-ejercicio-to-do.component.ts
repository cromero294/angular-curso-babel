import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-cmp-ejercicio-to-do',
  templateUrl: './cmp-ejercicio-to-do.component.html',
  styleUrls: ['./cmp-ejercicio-to-do.component.css']
})
export class CmpEjercicioToDoComponent implements OnInit {
  tareas: Array<string> = [];
  tachado: Array<boolean> = [];

  constructor(private tareasService: TareasService) { }

  ngOnInit() {
    this.tareas = this.tareasService.getTareas();
    this.tachado = this.tareasService.getTachado();
  }

  addTarea(tarea: string) {
    this.tareasService.addTarea(tarea);
  }

  removeTarea(tarea: string) {
    this.tareasService.removeTarea(tarea);
  }

  tacharTarea(tarea: string) {
    this.tareasService.tacharTarea(tarea);
  }
}
