import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  
  tareas = ["Ejemplo"];
  tachado = [false];

  constructor() { }

  getTareas(): Array<string> {
    return this.tareas;
  }

  getTachado(): Array<boolean> {
    return this.tachado;
  }

  addTarea(tarea: string) {
    if(!this.tareas.includes(tarea)){
      this.tareas.push(tarea);
      this.tachado.push(false);
    }
  }

  removeTarea(tarea: string) {
    let ind = this.tareas.indexOf(tarea);

    this.tareas.splice(ind, 1);
    this.tachado.splice(ind, 1);
  }

  tacharTarea(tarea: string) {
    this.tareas.forEach((x, i) => {
      if(x == tarea) {
        this.tachado[i] = (this.tachado[i] == false) ? true : false;
      }
    });
  }
}
