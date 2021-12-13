import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  }

  isLogged!: boolean;

  constructor(private authService: AuthService, private router: Router) { }


  onSignIn(): void {
    this.authService.signIn(this.user);
    this.isLogged = this.authService.isAuthenticated;
    if(this.isLogged) {
      const redirect = this.authService.redirectUrl
            ? this.authService.redirectUrl
            : '/courses';
          this.router.navigate([redirect]);
    }
  }
}


