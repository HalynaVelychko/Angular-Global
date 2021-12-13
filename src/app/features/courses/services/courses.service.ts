import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of} from 'rxjs';
import { courseData } from 'src/app/mockData/data';
import { CourseModel } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses: CourseModel[] = courseData;
  private coursesDataSubject$$: BehaviorSubject<CourseModel[]> = new BehaviorSubject(this.courses);


  constructor() { }

  getCourses(): Observable<CourseModel[]> {
    return of(this.coursesDataSubject$$.getValue())
  }

  addCourse(course: CourseModel): void {
    this.courses = [ ...this.courses, course ];

    this.updateCoursesData();
  }

  getCourseById(id: number): any {
   const course = this.coursesDataSubject$$
                  .getValue()
                  .find((course) =>course.id === id)

   return  course;
  }


  updateCourse(id: number, course: CourseModel): void {
    this.courses =  this.courses.map((c: CourseModel) => {
      if(c.id === id){
        return course;
      }
      return c;
    });

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
    this.coursesDataSubject$$.next(this.courses);
  }
}
