import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/@ngrx';
import * as AuthActions from '../../../../../core/@ngrx/auth/auth.actions';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user = {
    login: '',
    password: '',
  }
  isLogged!: boolean;

  constructor(private authService: AuthService, private router: Router, private store: Store<AppState>) {}

  onSignIn(): void {
    this.store.dispatch(AuthActions.setToken({ login: this.user.login, password: this.user.password }))
  }
}


