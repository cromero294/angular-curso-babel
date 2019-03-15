import { Injectable, EventEmitter } from '@angular/core';
import { Tarea } from './tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  lista: Array<Tarea> = [new Tarea(0, 'Tarea 1')];
  listaCambiada = new EventEmitter<Array<Tarea>>();

  contId = 1;

  constructor() { }

  getListaTareas() {
    return this.lista;
  }
  
  addTarea(nombre: string) {
    let tarea = new Tarea(this.contId, nombre);
    // this.lista.push(tarea);
    this.contId++;
    this.lista = this.lista.concat([tarea]);
    this.listaCambiada.emit(this.lista);
  }

  deleteTarea(tarea: Tarea) {
    // const posicion = this.lista.indexOf(tarea);
    // this.lista.splice(posicion, 1);
    this.lista = this.lista.filter(x => x.id != tarea.id);
    this.listaCambiada.emit(this.lista);
  }

  completeTarea(tarea: Tarea) {
    // tarea.changeCompleta();
    this.lista = this.lista.map(t => {
      if(t.id === tarea.id){
        return new Tarea(tarea.id, tarea.nombre, !tarea.completa);
      }
      return t;
    });
    this.listaCambiada.emit(this.lista);
  }
}
