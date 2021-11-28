import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../features/auth/login/services/auth.service'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isLogged: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const { url } = state;
      return this.checkLogin(url);
  }

  private checkLogin(url: string): boolean | UrlTree {
    this.authService.isAuthenticated().subscribe(logSuccess => {
      this.isLogged = logSuccess;
    })
    if (this.isLogged) { return true; }
    this.authService.redirectUrl = url;
    return this.router.parseUrl('/login');
  }

}
