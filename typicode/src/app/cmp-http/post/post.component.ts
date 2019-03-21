import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/clases/post';
import { ComentariosService } from 'src/app/servicios/comentarios.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post;
  usuario;
  mostrar: boolean;
  comentarios;

  constructor(private commentService: ComentariosService) {

  }

  ngOnInit() {
    let observable = this.commentService.updateComentarios(this.post.id);
    observable.subscribe(
      nuevaLista => this.comentarios = nuevaLista,
      err => console.log(err)
    );

    let obUsers = this.commentService.getUser(this.post.userId);
    obUsers.subscribe(
      user => {
        this.usuario = user;
      },
      err => console.log(err)
    );
  }

  mostrarComentarios() {
    this.mostrar = !this.mostrar;
  }
}
