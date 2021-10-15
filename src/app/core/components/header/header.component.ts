import { ButtonType } from './../../../shared/components/button/enums/button-type.enum';
import { Component } from '@angular/core';
import { ButtonSize } from 'src/app/shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {
  buttonType = ButtonType.TRANSPARENT;
  buttonSize = ButtonSize.SMALL;

  constructor() { }



}
