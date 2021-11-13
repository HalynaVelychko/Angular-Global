import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Components
import { ButtonComponent } from './index';
import { BorderDirective } from './directives/border.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    ButtonComponent,
    BorderDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
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
    DurationPipe,
    OrderByPipe,
    FilterPipe,
  ],
})
export class SharedModule { }
