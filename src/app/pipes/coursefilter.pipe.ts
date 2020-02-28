import { Pipe, PipeTransform } from '@angular/core';
import { course } from '../model/course';

@Pipe({
  name: 'coursefilter'
})
export class CoursefilterPipe implements PipeTransform {

  transform(courses: course[], type: string): course[] {
    if(type=="High Price")
      return courses.filter(x=>x.price>24000);
    else if(type=="Moderate Price")
      return courses.filter(x=>x.price>=16000);
    else if(type=="Low Price")
      return courses.filter(x=>x.price<16000);
    else if(type=="All")
      return courses;
    else
      return courses.filter(x=>x.user.username==type);
  }

}
