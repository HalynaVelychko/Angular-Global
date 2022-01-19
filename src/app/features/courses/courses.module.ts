import { HttpClientModule } from '@angular/common/http';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared';

//Components
import { CoursesListComponent, CourseItemComponent, CoursesSerachComponent, CourseFormComponent } from './components';

@NgModule({
  declarations: [
    CoursesListComponent,
    CourseItemComponent,
    CoursesSerachComponent,
    CourseFormComponent,
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    CoursesRoutingModule,
  ],
  exports: [
    CoursesListComponent,
  ],
})
export class CoursesModule { }
