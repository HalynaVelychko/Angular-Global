import { CourseModel } from './../../models/course.model';
import { Component, Output, EventEmitter } from '@angular/core';

import { ButtonSize, ButtonType } from '@shared';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss'],
})
export class CourseAddComponent  {
  buttonType = ButtonType.BLUE;
  buttonSize = ButtonSize.LARGE;
  @Output() addCourse: EventEmitter<CourseModel> =  new EventEmitter<CourseModel>();

  constructor() { }

  onAddCourse(): void {
    this.addCourse.emit();
  }
}
