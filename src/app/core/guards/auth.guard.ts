import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
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
    state: RouterStateSnapshot): boolean | UrlTree {
      const { url } = state;
      return this.checkLogin(url);
  }

  private checkLogin(url: string): boolean | UrlTree {
    this.isLogged = !! this.authService.getUserInfo();
    console.log(this.isLogged)
    if(!this.isLogged) {
      this.authService.redirectUrl = url;
      return this.router.parseUrl('/login')
    }
    return true;
  }
}
