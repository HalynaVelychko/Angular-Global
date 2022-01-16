import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy{
  user = {
    login: '',
    password: '',
  }
  isLogged!: boolean;
  private subs!: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  onSignIn(): void {
    this.subs = this.authService.signIn(this.user).subscribe(() => {
      this.isLogged = this.authService.logger$$.getValue();
      if(this.isLogged) {
        this.router.navigate(['/courses']);
      };
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}


