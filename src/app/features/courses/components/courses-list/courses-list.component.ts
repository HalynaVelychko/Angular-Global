import { FilterPipe } from './../../../../shared/pipes/filter.pipe';
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
  providers: [FilterPipe],
})
export class CoursesListComponent  {
  courses$$ = new BehaviorSubject<CourseModel[]>(courseData);
  courses$ = this.courses$$.asObservable();
  searchValue!: string;

  constructor() { }

  onSearchData(searchQuery: string): void {
    this.searchValue = searchQuery;
  }

  trackById(_index: number, course: CourseModel): number {
    return course.id
  }

  onEditCourse(course: CourseModel): void {
    console.log(`${course} was edited!`)
  }

  onDeleteCourse(course: CourseModel): void {
    console.log(`${course} was deleted!`)
  }
}
