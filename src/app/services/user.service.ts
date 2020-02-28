import { Injectable } from '@angular/core';
import { HttpClient, HttpXsrfTokenExtractor, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions;

  constructor(private http:HttpClient) { }

  getUserImages():Observable<object>{
    return this.http.get("http://localhost:8081/open-api/ufiles");
  }

  storeUser(obj):Observable<object>{
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post("http://localhost:8081/open-api/register",obj,this.httpOptions);
  }
  
}
