import { Component, OnInit, Input } from '@angular/core';
import { course } from 'src/app/model/course';
import PubSub from 'pubsub-js';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

 @Input('course') current:course
  constructor() { }

  ngOnInit(): void {
  }

  setType(){
    PubSub.publish("type-event",this.current.user.username);
  }

}
