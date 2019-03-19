import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {
  constructor(private httpClient: HttpClient) { }

  public getComentarios(idPost: number):Observable<any>{  
    return this.httpClient.get("https://jsonplaceholder.typicode.com/comments?postId=" + idPost);
  }
  
}
