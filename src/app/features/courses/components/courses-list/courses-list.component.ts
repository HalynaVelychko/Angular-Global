import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonSize, ButtonType } from '@shared';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CoursesService } from '../../services/courses.service';
import { FilterPipe } from './../../../../shared/pipes/filter.pipe';

//Models
import { CourseModel } from './../../models/course.model';
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [FilterPipe],
})
export class CoursesListComponent implements OnInit {
  buttonType = ButtonType;
  buttonSize = ButtonSize.LARGE;
  courses$$ = new BehaviorSubject<CourseModel[]>([]);
  courses$ = this.courses$$.asObservable();
  searchValue!: string;
  url:any

  constructor(
    private router: Router,
    private coursesService: CoursesService,
    ) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.coursesService.getCourses().subscribe((courses) => {
      this.courses$$.next(courses);
    });
  }

  onSearchData(searchQuery: string): void {
    this.coursesService.searchCourse(searchQuery)
      .subscribe((courses) => this.courses$$.next(courses));
  }

  trackById(_index: number, course: CourseModel): number {
    return course.id
  }

  onEditCourse(course: CourseModel): void {
    const link = ['/courses/edit', course.id];
    this.router.navigate(link);
  }

  onDeleteCourse(id: number): void {
    if(confirm('Are sure you want to delete this course?')) {
      this.coursesService.removeCourse(id).pipe(
        tap(() => {
          this.getCourses();
        }),
      ).subscribe();
    }
  }

  onAddNewCourse(): void {
    this.router.navigate(['/courses/add-course']);
  }

  loadMore(): void {
    this.coursesService.loadMore().subscribe(courses => {
      this.courses$$.next(courses);
    })
  }
}
