import { Component } from '@angular/core';

import { ButtonType, ButtonSize } from '@shared';

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
