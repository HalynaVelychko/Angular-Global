import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
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

  getCourseById(id: number): CourseModel | undefined {
    return this.courses.find((course: CourseModel) => course.id === id)
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
