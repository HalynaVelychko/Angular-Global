import { Component, Input } from '@angular/core';

//Models
import { CourseModel } from '../../models/course.model';
import { ButtonSize, ButtonType } from '@shared';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent  {
  @Input() course!: CourseModel;

  buttonType = ButtonType.BLUE;
  buttonSize = ButtonSize.MEDIUM;

  constructor() { }
}
