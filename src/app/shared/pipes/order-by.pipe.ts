import { CourseModel } from './../../features/courses/models/course.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {

  transform(courses: CourseModel[]): CourseModel[] {
    return courses.sort((course1, course2) => new Date(course1.date).getTime() - new Date(course2.date).getTime());
  }
}
