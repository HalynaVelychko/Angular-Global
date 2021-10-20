import { Component, Output, EventEmitter } from '@angular/core';

import { ButtonType, ButtonSize } from '@shared';

@Component({
  selector: 'app-courses-serach',
  templateUrl: './courses-serach.component.html',
  styleUrls: ['./courses-serach.component.scss'],
})
export class CoursesSerachComponent  {
  inputData = '';

  buttonSize = ButtonSize.LARGE;
  buttonType = ButtonType.GREEN;

  @Output() searchData: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onSubmit(): void {
    console.log(this.inputData);
    this.searchData.emit(this.inputData)
  }
}
