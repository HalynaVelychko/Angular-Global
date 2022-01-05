import { ActivatedRoute, Router } from '@angular/router';

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
    const currentCourse = this.route.snapshot.params;
    if(currentCourse.courseID){
      this.course = this.courseService.getCourseById(+currentCourse.courseID)
    }

    this.course = {
      creationDate: new Date(Date.now()),
    } as CourseModel;;
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
