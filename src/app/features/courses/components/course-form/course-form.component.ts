import { ActivatedRoute, ParamMap, Router } from '@angular/router';

// rxjs
import { map, switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
// import { courseData } from 'src/app/mockData/data';
import { CoursesService } from '../../services/courses.service';
import { CourseModel } from '../../models/course.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit  {
  course!: CourseModel;
  dateToday = new Date();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CoursesService ) {
  }

  ngOnInit(): void {
    this.course = {
      creationDate: new Date(Date.now()),
    } as CourseModel;
    const observer = {
      next: (course: CourseModel) => (this.course = { ...course}),
      error: (err: any) => console.log(err),
    }
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.courseService.getCourseById(+params.get('courseID')!)),
    map((course) => course ? course : {} as CourseModel)).subscribe(observer)
  }


  onSave(): void {
    const course = { ...this.course as CourseModel};
    console.log(course)
    if(course.id) {
      this.courseService.updateCourse(course.id, course)
    } else {
      this.courseService.addCourse(course)
    }
    this.onCancel();
  }

  onCancel(): void {
    this.router.navigate(['/courses']);
  }
}
