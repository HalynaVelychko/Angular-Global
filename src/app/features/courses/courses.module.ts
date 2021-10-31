
import { SharedModule } from '@shared';
import { NgModule } from '@angular/core';

//Components
import { CoursesListComponent, CourseItemComponent, CoursesSerachComponent, CourseAddComponent } from './components';


@NgModule({
  declarations: [
    CoursesListComponent,
    CourseItemComponent,
    CoursesSerachComponent,
    CourseAddComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    CoursesListComponent,
  ],
})
export class CoursesModule { }
