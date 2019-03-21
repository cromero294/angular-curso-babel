import { Component, OnInit } from '@angular/core';
import { ComentariosService } from 'src/app/servicios/comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  comentarios;

  constructor(private commentService: ComentariosService) { }

  ngOnInit() {
    // this.comentarios = this.commentService.getComentarios();
    // this.commentService.commentCambiados.subscribe(nuevaLista => {
    //   this.comentarios = nuevaLista;
    // })
  }

}
