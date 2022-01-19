import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Observer } from 'rxjs';
import { AuthService } from '../../features/auth/login/services/auth.service'
import { AppState } from '../@ngrx/app.state';
import { selectAuthisAuthenticated } from '../@ngrx/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isLogged: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Observable((observer: Observer<boolean>) => {
      this.store.pipe(select(selectAuthisAuthenticated)).subscribe((isAuthenticated: boolean) => {
        observer.next(isAuthenticated);
        if(!isAuthenticated){
          this.router.navigate(['login']);
        }
      });
    })
  }
}
