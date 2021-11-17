import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private authService: AuthService) { }

  onSignIn(): void {
    this.authService.signIn(this.email, this.password);
    console.log('Logged in successfully')
  }
}


