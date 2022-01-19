import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Components
import { ButtonComponent, SpinnerComponent } from './index';
import { BorderDirective } from './directives/border.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { InputComponent } from './components/input/input.component';
import { NgxMaskModule } from 'ngx-mask';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    ButtonComponent,
    BorderDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    SpinnerComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    TranslateModule,
  ],
  exports: [
    ButtonComponent,
    CommonModule,
    FormsModule,
    BorderDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    SpinnerComponent,
    InputComponent,
    TranslateModule,
  ],
})
export class SharedModule { }
