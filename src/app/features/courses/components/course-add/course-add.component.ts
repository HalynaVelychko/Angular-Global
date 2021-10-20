import { Component } from '@angular/core';

import { ButtonSize, ButtonType } from '@shared';

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
