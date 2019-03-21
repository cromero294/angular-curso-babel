import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../clases/comment';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private httpClient: HttpClient) { }

  public updateComentarios(idPost: number){  
    return this.httpClient.get<Comment>("https://jsonplaceholder.typicode.com/comments?postId=" + idPost);
  }

  public getUser(idUser: string){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users?id=" + idUser);
  }
  
}

// export class ComentariosService {
//   comentarios;
//   commentCambiados = new EventEmitter<Array<Object>>();

//   constructor(private httpClient: HttpClient) { }

//   public updateComentarios(idPost: number){  
//     let observable = this.httpClient.get("https://jsonplaceholder.typicode.com/comments?postId=" + idPost);
//     observable.subscribe(
//       nuevaLista => {
//         this.comentarios = nuevaLista;
//         this.commentCambiados.emit(this.comentarios);
//       },
//       err => console.log(err)
//     );
//   }

//   public getComentarios() {
//     return this.comentarios;
//   }
  
// }
