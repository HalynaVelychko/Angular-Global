import { CoursesRoutingModule } from './courses-routing.module';
import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@shared';

//Components
import { CoursesListComponent, CourseItemComponent, CoursesSerachComponent, CourseAddComponent, CourseFormComponent } from './components';

@NgModule({
  declarations: [
    CoursesListComponent,
    CourseItemComponent,
    CoursesSerachComponent,
    CourseAddComponent,
    CourseFormComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    CoreModule,
    CoursesRoutingModule,
  ],
  exports: [
    CoursesListComponent,
  ],
})
export class CoursesModule { }
