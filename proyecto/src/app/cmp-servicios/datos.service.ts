import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})

export class DatosService {
  datos = ["Dato 1"];
  datoEmitido = new EventEmitter<string>();

  constructor(private logService: LogService) { }

  getDatos() {
    return this.datos;
  }

  sendDato(dato: string) {
    this.datoEmitido.emit(dato);
  }

  saveDato(nuevoDato: string) {
    this.datos.push(nuevoDato);
    this.logService.mostrarMsg("Se ha añadido " + nuevoDato);
  }
}
