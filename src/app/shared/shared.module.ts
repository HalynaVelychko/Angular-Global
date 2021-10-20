import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Components
import { ButtonComponent } from './index';


@NgModule({
  declarations: [
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ButtonComponent,
    CommonModule,
    FormsModule,
  ],
})
export class SharedModule { }
