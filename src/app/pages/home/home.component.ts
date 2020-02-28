import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { course } from 'src/app/model/course';
import PubSub from 'pubsub-js';
import { LogstatusService } from 'src/app/services/logstatus.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  type:string="All";
courses:course[];
  constructor(private cs:CourseService, private ls:LogstatusService) {
      PubSub.subscribe("type-event",(event,data)=>{
        this.type=data;
      })
   }

  ngOnInit(): void {
    this.cs.getCourses().subscribe(
      (data:course[])=>this.courses=data,
      ()=>this.courses=[]
    );
    }
   
}
