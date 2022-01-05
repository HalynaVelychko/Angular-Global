import { Component, OnInit } from '@angular/core';

import { CourseModel } from './../../models/course.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { CoursesService } from '../../services/courses.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit  {
  course!:CourseModel;
  currentCourseId!: Params;
  subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CoursesService ) {
  }

  ngOnInit(): void {
    this.currentCourseId = this.route.snapshot.params;
    if(this.currentCourseId.courseID){
      this.subscription = this.courseService
        .getCourseById(+this.currentCourseId.courseID)
        .subscribe((course: any) => {
          this.course = course;
      });
    } else {
      this.course = {} as CourseModel;
    }
  }


  onSave(): void {
    if(this.route.routeConfig?.path === 'edit/:courseID') {
      this.subscription = this.courseService
        .updateCourse(this.currentCourseId.courseID, this.course)
        .subscribe((updatedCourse: CourseModel) => {
          this.course = updatedCourse;
      })
    } else {
      this.course = { ...this.course, id: +Math.floor(Math.random()*100000), isTopRated: true }
      this.courseService.addCourse(this.course).subscribe((data) => {
        console.log(data)
      });
    }
    this.onCancel();
  }

  onCancel(): void {
    this.router.navigate(['/courses']);
  }
}
