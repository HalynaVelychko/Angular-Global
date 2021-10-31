import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Components
import { ButtonComponent } from './index';
import { BorderDirective } from './directives/border.directive';


@NgModule({
  declarations: [
    ButtonComponent,
    BorderDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ButtonComponent,
    CommonModule,
    FormsModule,
    BorderDirective,
  ],
})
export class SharedModule { }
