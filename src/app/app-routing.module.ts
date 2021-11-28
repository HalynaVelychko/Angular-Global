import { LoginComponent } from './features/auth/login/components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent, CourseFormComponent } from './features/courses'
import { PathNotFoundComponent } from './layout';
import { AuthGuard } from '@core';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'courses',
    component: CoursesListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full',
  },
  {
    path: 'edit/:courseID',
    component: CourseFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-course',
    component: CourseFormComponent,
    canActivate: [AuthGuard],
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
  providers: [AuthGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}

