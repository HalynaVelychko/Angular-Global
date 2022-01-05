import { CourseModel } from './../../models/course.model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { courseData } from 'src/app/mockData/data';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent  {
  dateToday = Date.now();
  course!: CourseModel;
  constructor() { }

  onSave(signupForm: NgForm): void {
    console.log(signupForm.status)
    console.log(this.course.title)
  }
}
