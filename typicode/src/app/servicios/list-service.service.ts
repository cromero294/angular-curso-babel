import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Post } from '../clases/post';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  constructor(private httpClient: HttpClient) { }

  public listar():Observable<any>{  
    return this.httpClient.get<Array<Post>>("https://jsonplaceholder.typicode.com/posts");
  }
  
}
