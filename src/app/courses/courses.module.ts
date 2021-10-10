import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent, CourseItemComponent, CoursesSerachComponent, CourseAddComponent } from './components';



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
  ],
  exports: [
    CoursesListComponent,
  ],
})
export class CoursesModule { }
