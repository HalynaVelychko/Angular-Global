import { CourseModel } from './../../models/course.model';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { courseData } from '../../../../mockData/data';
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent  {
  courses$ = new BehaviorSubject<CourseModel[]>(courseData);

  constructor() { }


}
