import { ButtonSize } from './enums/button-size.enum';
import { ButtonType } from './enums/button-type.enum';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ButtonComponent  {
  @Input() buttonType: ButtonType.BLUE | ButtonType.GREEN | ButtonType.TRANSPARENT = ButtonType.TRANSPARENT;

  @Input() buttonSize = ButtonSize.SMALL;

  @Input() buttonText!: string;

  @Input() iconSrc!: string;

  constructor() { }

  public get defaultClass(): string {
    return `button button--default button--${this.buttonType} button--${this.buttonSize}`
  }
}
