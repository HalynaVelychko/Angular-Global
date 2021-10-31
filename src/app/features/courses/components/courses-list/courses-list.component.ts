import { Component } from '@angular/core';

//rxjs
import { BehaviorSubject } from 'rxjs';

//Models
import { CourseModel } from './../../models/course.model';
import { courseData } from '../../../../mockData/data';
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent  {
  courses$$ = new BehaviorSubject<CourseModel[]>(courseData);
  courses$ = this.courses$$.asObservable();

  constructor() { }

  onSearchData(data: string): void {
    console.log(`This ${data} was found!!`)
  }

  trackById(_index: number, course: CourseModel): number {
    return course.id
  }
}
