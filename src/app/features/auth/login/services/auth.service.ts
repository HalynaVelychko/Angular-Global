import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  redirectUrl!: string;
  private logger$$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  isAuthenticated = this.logger$$.getValue();

  signIn(user: { email: string, password: string }): void {
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('token', `${user.email}${user.password}`);
      this.logger$$.next(true);
  }

  signOut(): void {
    localStorage.removeItem('currentUser');
    this.logger$$.next(false);
  }

  getUserInfo(): string | null {
    return localStorage.getItem('currentUser');
  }
}
