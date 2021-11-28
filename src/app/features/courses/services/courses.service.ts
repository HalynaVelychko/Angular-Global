import { catchError, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, of, Subject, throwError } from 'rxjs';
import { courseData } from 'src/app/mockData/data';
import { CourseModel } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses: CourseModel[] = courseData;
  private coursesDataSubject: Subject<CourseModel[]> = new BehaviorSubject(this.courses);


  constructor() { }

  getCourses(): Observable<CourseModel[]> {
    return this.coursesDataSubject.asObservable();
  }

  addCourse(course: CourseModel): void {
    this.courses = [ ...this.courses, course ];

    this.updateCoursesData();
  }

  getCourseById(id: number): Observable<CourseModel> {
    return this.getCourses().pipe(
      switchMap((courses: CourseModel[]) => {
        const course = courses.find(course => course.id === id);
        return course ? of(course): EMPTY
      }),
      catchError(_ => throwError('Error in getCourseByIdMethod')),
    )
  }


  updateCourse(id: number, course: CourseModel): void {
    const indexCourse = this.findCourseByIndex(id)
    this.courses =  [
      ...this.courses.slice(0, indexCourse),
      course,
      ...this.courses.slice(indexCourse + 1),
    ]

    this.updateCoursesData();
  }

  removeCourse(id: number): void {
    const indexCourse = this.findCourseByIndex(id);
    this.courses = [
      ...this.courses.slice(0, indexCourse),
      ...this.courses.slice(indexCourse + 1),
    ]

    this.updateCoursesData();
  }

  private findCourseByIndex(id: number): number {
    return this.courses.findIndex((course: CourseModel) => course.id === id)
  }

  private updateCoursesData(): void {
    this.coursesDataSubject.next(this.courses);
  }
}
