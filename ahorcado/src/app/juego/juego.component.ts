import { Component, OnInit, Input } from '@angular/core';
import { AhorcadoService } from '../ahorcado.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  palabra: string;
  categoria: string;

  constructor(private ahorcadoService: AhorcadoService) { }

  ngOnInit() {
    this.categoria = this.ahorcadoService.categoria;

    let observable = this.ahorcadoService.getPalabras(this.categoria);
    observable.subscribe(
      array => this.palabra = array[Math.floor(Math.random() * array.length)].palabra
    );
  }

}
