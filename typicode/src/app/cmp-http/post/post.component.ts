import { Component, OnInit, Input } from '@angular/core';
import { ListServiceService } from 'src/app/servicios/list-service.service';
import { Post } from 'src/app/clases/post';
import { ComentariosService } from 'src/app/servicios/comentarios.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  comentarios;
  enableComments: boolean = true;

  constructor(private commentService: ComentariosService) { }

  ngOnInit() {
    let observable = this.commentService.getComentarios(this.post.id);
    observable.subscribe(
      nuevaLista => this.comentarios = nuevaLista,
      err => console.log(err)
    );
  }

  mostrarComentarios() {
    this.enableComments = !this.enableComments;
  }
}
