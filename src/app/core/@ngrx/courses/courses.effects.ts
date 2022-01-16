import { catchError, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CoursesService } from 'src/app/features/courses/services/courses.service';
import * as CoursesActions from './courses.actions';
import { EMPTY } from 'rxjs';




@Injectable()
export class CoursesEffects {
  getCourses$ = createEffect((): any => { return this.actions$.pipe(
    ofType(CoursesActions.getCourses),
    switchMap(() => this.coursesService.getCourses()
      .pipe(
        map(courses => (CoursesActions.getCoursesSuccess({ courses })),
        catchError(() => EMPTY),
      )),
    ))
  })

  loadMoreCourses$ = createEffect((): any => { return this.actions$.pipe(
    ofType(CoursesActions.loadMoreCourses),
    switchMap(() => this.coursesService.loadMore()
      .pipe(
        map(courses => (CoursesActions.loadMoreCoursesSuccess({ courses })),
        catchError(() => EMPTY),
      )),
    ))
  })

  getCourse$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(CoursesActions.getCourse),
      map(action => action.id),
      switchMap(id => this.coursesService.getCourseById(id)
        .pipe(
          map(course => CoursesActions.getCourseSuccess({ course })),
          catchError(() => EMPTY),
      )),
    )
  })

  editCourse$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(CoursesActions.editCourse),
      switchMap(data => this.coursesService.updateCourse(data.id, data.course)
        .pipe(
          map(course => (CoursesActions.editCourseSuccess({ course })),
          catchError(() => EMPTY),
      )),
    ))
  })

constructor(
  private actions$: Actions,
  private coursesService: CoursesService,
  ) {}
}

