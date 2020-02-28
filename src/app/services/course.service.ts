import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { 

  }

  getCourses():Observable<object>{
      return this.http.get("http://localhost:8081/open-api/courses");
  }
}
