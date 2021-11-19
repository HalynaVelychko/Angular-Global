import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@shared';

//Components
import { CoursesListComponent, CourseItemComponent, CoursesSerachComponent, CourseAddComponent, CourseFormComponent } from './components';
import { MatDialogModule } from '@angular/material/dialog';

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
    MatDialogModule,
  ],
  exports: [
    CoursesListComponent,
  ],
})
export class CoursesModule { }
