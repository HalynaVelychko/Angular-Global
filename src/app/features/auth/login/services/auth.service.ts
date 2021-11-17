import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  credentials = {
    email: 'test@gmail.com',
    password: 'test78',
  }

  private logger$$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  isAuthenticated(): Observable<boolean> {
    return this.logger$$.asObservable();
  }

  signIn(email: string, password: string): void {
    if(this.credentials.email === email && this.credentials.password === password) {
      localStorage.setItem('isAuthenticated',  'true');

      this.logger$$.next(true);
    } else {
      localStorage.removeItem('isAuthenticated');

      this.logger$$.next(false);
    }
  }

  signOut(): void {
    localStorage.removeItem('isAuthenticated');
    this.logger$$.next(false);
  }

  getUserInfo(): string {
    return 'test@gmail.com';
  }
}
