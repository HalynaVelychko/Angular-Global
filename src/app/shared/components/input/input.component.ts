import { Component, forwardRef, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputTypes } from './input.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: InputTypes = InputTypes.text;
  @Input() id = '';
  @Input() placeholder = '';
  @Input() required = false;
  @Input() success = false;
  @Input() maxLength = Infinity;
  @Input() minLength = -Infinity;
  @Input() valid = true;
  @Input() labelText = '';
  @Input() mask = '';

  @Output() blurEvent =  new EventEmitter<void>();

  get value(): string {
    return this.inputValue;
  }

  set value(value: string) {
    if(value !== this.inputValue){
      this.inputValue = value;
      this.onFormChanged(value);
      this.onTouch();
    }
  }

  private inputValue = '';
  private onFormChanged: (value: string) => void = (): void => {};
  private onTouch: () => void = (): void => {};

  constructor() { }

  writeValue(val: string): void {
    this.value = val;
  }
  registerOnChange(fn: any): void {
    this.onFormChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  onBlur(): any {
    this.onTouch();
    this.blurEvent.emit();
  }
}
