import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

//Enums
import { ButtonSize, ButtonType } from '@shared';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ButtonComponent  {
  @Input() buttonType!: ButtonType;

  @Input() buttonSize!: ButtonSize;

  @Input() buttonText!: string;

  @Input() iconSrc!: string;

  constructor() { }

  public get defaultClass(): string {
    return `button button--default button--${this.buttonType} button--${this.buttonSize}`
  }
}
