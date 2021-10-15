import { ButtonSize } from './../../../../shared/components/button/enums/button-size.enum';
import { ButtonType } from './../../../../shared/components/button/enums/button-type.enum';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss'],
})
export class CourseAddComponent  {
  buttonType = ButtonType.BLUE;
  buttonSize = ButtonSize.LARGE;

  constructor() { }

}
