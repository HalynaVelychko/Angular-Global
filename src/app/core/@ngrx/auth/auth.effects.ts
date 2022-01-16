import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, take, tap, catchError } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import * as AuthActions from './auth.actions';
import { AuthService } from 'src/app/features/auth/login/services/auth.service';


@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private auth: AuthService,
    private router: Router,
  ) { }

  singIn$ = createEffect((): any =>
    { return this.actions$.pipe(
      ofType(AuthActions.setToken),
      exhaustMap(action =>
        this.auth.signIn(action).pipe(
          map(data => AuthActions.setTokenSuccess({ token: data.token, isAuthenticated: true })),
          tap((data) => {
            localStorage.setItem('token', data.token);
            this.auth.logger$$.next(true);
            this.router.navigate(['']);
          }),
          catchError((error: Error) =>
            of( AuthActions.setTokenFail({error})),
          ),
        ),
      ),
    ) });

  logOut$ = createEffect((): any => { return this.actions$.pipe(
      ofType(AuthActions.removeToken),
      take(1),
      tap(() => {
        this.auth.signOut();
      }),
      catchError(() => EMPTY),
    );
  });
}
