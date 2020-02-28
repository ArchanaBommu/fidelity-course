import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogstatusService {

  httpOptions;
  public message:string="Login";
  private status:boolean=false;
  constructor(private http:HttpClient) { }

  getStatus(){
    return this.status;
  }

  login(data):Observable<object>{
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Authorization': "Basic "+btoa("fidelity:password")
      })
    }
      return this.http.post("http://localhost:8081/authorize/jwt",data,this.httpOptions);
  }

  updateStatus(status:boolean):void{
    this.status=status;
  }
}
