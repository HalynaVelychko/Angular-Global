import { FilterPipe } from './../../../../shared/pipes/filter.pipe';
import { Component, OnInit } from '@angular/core';

//rxjs
import { Observable } from 'rxjs';

//Models
import { CourseModel } from './../../models/course.model';
import { CoursesService } from '../../services/courses.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [FilterPipe],
})
export class CoursesListComponent implements OnInit {
  courses$!: Observable<CourseModel[]>;
  searchValue!: string;

  constructor(
    private router: Router,
    private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses$ = this.coursesService.getCourses()
  }

  onSearchData(searchQuery: string): void {
    this.searchValue = searchQuery;
  }

  trackById(_index: number, course: CourseModel): number {
    return course.id
  }

  onEditCourse(course: CourseModel): void {
    const link = ['/edit', course.id];
    this.router.navigate(link);
  }

  onDeleteCourse(id: number): void {
    if(confirm('Are sure you want to delete this course?')) {
      this.coursesService.removeCourse(id);
    }
  }

  onAddNewCourse(): void {
    this.router.navigate(['/add-course']);
  }
}
