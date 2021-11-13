import { CourseModel } from './../../features/courses/models/course.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {

  transform(courses: CourseModel[]): CourseModel[] {
    return courses.sort((course1, course2) => course1.creationDate.getTime() - course2.creationDate.getTime());
  }
}
