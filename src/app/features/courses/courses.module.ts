import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@shared';

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
    FormsModule,
  ],
  exports: [
    CoursesListComponent,
  ],
})
export class CoursesModule { }
