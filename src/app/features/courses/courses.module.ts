import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent, CourseItemComponent, CoursesSerachComponent, CourseAddComponent } from './components';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CoursesListComponent,
    CourseItemComponent,
    CoursesSerachComponent,
    CourseAddComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    CoursesListComponent,
  ],
})
export class CoursesModule { }
