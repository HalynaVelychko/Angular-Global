import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@core';
import { CourseFormComponent, CoursesListComponent } from './components';


const routes: Routes = [
  {
    path: 'courses',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: CoursesListComponent ,
      },
      {
        path: 'add-course',
        component: CourseFormComponent,
      },
      {
        path: 'edit/:courseID',
        component: CourseFormComponent,
      },
    ],
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [AuthGuard],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
