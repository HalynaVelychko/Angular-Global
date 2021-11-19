import {
  Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

//Models
import { CourseModel } from '../../models/course.model';
import { ButtonSize, ButtonType } from '@shared';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent {
  @Input() course!: CourseModel;

  @Output() deleteCourse = new EventEmitter<number>()
  @Output() editCourse = new EventEmitter<CourseModel>()

  buttonType = ButtonType.BLUE;
  buttonSize = ButtonSize.MEDIUM;

  constructor() { }

  onEditCourse() {
    this.editCourse.emit(this.course)
  }

  onDeleteCourse() {
    this.deleteCourse.emit(this.course.id)
  }
}
