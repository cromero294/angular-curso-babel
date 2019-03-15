import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  listaTareas: Array<Tarea> = [];

  constructor(private tareasService: TareasService) { }

  ngOnInit() {
    this.listaTareas = this.tareasService.getListaTareas();
    this.tareasService.listaCambiada.subscribe((nuevaLista) => {
      this.listaTareas = nuevaLista;
    })
  }

  eliminar(tarea: Tarea) {
    this.tareasService.deleteTarea(tarea);
  }

  completar(tarea: Tarea) {
    this.tareasService.completeTarea(tarea);
  }
}
