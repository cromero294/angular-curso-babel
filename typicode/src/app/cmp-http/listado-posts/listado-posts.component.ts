import { Component, OnInit } from '@angular/core';
import { ListServiceService } from 'src/app/servicios/list-service.service';
import { Post } from 'src/app/clases/post';

@Component({
  selector: 'app-listado-posts',
  templateUrl: './listado-posts.component.html',
  styleUrls: ['./listado-posts.component.css']
})
export class ListadoPostsComponent implements OnInit {
  posts: Array<Post> = [];

  constructor(private listService: ListServiceService) { }

  ngOnInit() {
    let observable = this.listService.listar();
    observable.subscribe(
      nuevaLista => this.posts = nuevaLista,
      err => console.log(err)
    );
  }

}
