import { Component, Input } from '@angular/core';
import { ButtonSize, ButtonType } from 'src/app/shared';
import { CourseModel } from '../../models/course.model';

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
