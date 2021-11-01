import { FilterPipe } from './../../../../shared/pipes/filter.pipe';
import { Component } from '@angular/core';

//rxjs
import { BehaviorSubject, Observable } from 'rxjs';

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

  constructor(private filter: FilterPipe) { }

  onSearchData(searchQuery: string): Observable<CourseModel[]> | CourseModel[] {
    const query = searchQuery.trim();
    return this.filter.transform(this.courses$, query)
  }

  trackById(_index: number, course: CourseModel): number {
    return course.id
  }
}
