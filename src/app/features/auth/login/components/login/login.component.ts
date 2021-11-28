import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router) { }

  onSignIn(): void {
    this.authService.signIn(this.email, this.password);
    if(this.authService.isAuthenticated()) {
      const redirect = this.authService.redirectUrl
            ? this.authService.redirectUrl
            : '/courses';
          this.router.navigate([redirect]);
    }
  }
}


