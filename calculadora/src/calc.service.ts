import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private httpClient: HttpClient) { }

  public calcular(op1:number,op2:number,operacion:string):Observable<any>{  
    return this.httpClient.get("http://localhost:8080/"+op1+"/"+op2+"/"+operacion);
  }
}
