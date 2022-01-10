import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CoursesService } from 'src/app/features/courses/services/courses.service';
import * as CoursesActions from './courses.actions';
import { EMPTY } from 'rxjs';



@Injectable()
export class CoursesEffects {
  getCourses$ = createEffect((): any => this.actions$.pipe(
    ofType(CoursesActions.getCourses),
    switchMap(() => this.coursesService.getCourses()
      .pipe(
        map(courses => (CoursesActions.getCoursesSuccess({ courses })),
        catchError(() => EMPTY)
      ))
    ),
  ))

constructor(
  private actions$: Actions,
  private coursesService: CoursesService
  ) {}
}

