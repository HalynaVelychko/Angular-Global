import {
  Component, Input, EventEmitter, Output } from '@angular/core';

//Models
import { CourseModel } from '../../models/course.model';
import { ButtonSize, ButtonType } from '@shared';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent {
  @Input() course!: CourseModel;

  @Output() deleteCourse = new EventEmitter<CourseModel>()
  @Output() editCourse = new EventEmitter<CourseModel>()

  buttonType = ButtonType.BLUE;
  buttonSize = ButtonSize.MEDIUM;

  constructor() { }

  onEditCourse() {
    this.editCourse.emit(this.course)
  }

  onDeleteCourse() {
    this.deleteCourse.emit(this.course)
  }
}
