import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent, CourseFormComponent } from './features/courses'
import { PathNotFoundComponent } from './layout';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesListComponent,
  },
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full',
  },
  {
    path: 'edit/:courseID',
    component: CourseFormComponent,
  },
  {
    path: 'add-course',
    component: CourseFormComponent,
  },
  {
    path: '**',
    component: PathNotFoundComponent,
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

