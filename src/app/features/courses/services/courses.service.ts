import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl, COURSES_API } from 'src/app/api/api.config';
import { CourseModel } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  showFromCourse = 0;
  showQuantityCourses = 3;

  constructor(private http: HttpClient) { }

  getCourses(): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(`${apiUrl}${COURSES_API}?start=${this.showFromCourse}&count=${this.showQuantityCourses}`);
  }

  addCourse(course: CourseModel): Observable<CourseModel> {
    console.log(course)
    return this.http.post<CourseModel>(`${apiUrl}${COURSES_API}`, course);
  }

  getCourseById(id: number): Observable<CourseModel> {
   return  this.http.get<CourseModel>(`${apiUrl}${COURSES_API}/${id}`);
  }

  updateCourse(id: number, course: CourseModel | null): Observable<CourseModel> {
    return this.http.patch<CourseModel>(`${apiUrl}${COURSES_API}/${id}`, course)
  }

  removeCourse(id: number): Observable<CourseModel> {
    return this.http.delete<CourseModel>(`${apiUrl}${COURSES_API}/${id}`)
  }

  loadMore(): Observable<CourseModel[]> {
    this.showQuantityCourses +=3
    return this.http.get<CourseModel[]>(`${apiUrl}${COURSES_API}?start=${this.showFromCourse}&count=${this.showQuantityCourses}`);
  }

  searchCourse(query: string): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(`${apiUrl}${COURSES_API}?textFragment=${query}`)
  }
}
