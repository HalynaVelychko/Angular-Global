import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  credentials = {
    email: 'test@gmail.com',
    password: 'test78',
  }
  private logger = new Subject<boolean>();
  private loggedIn = false;

  constructor() {}

  isAuthenticated(): Observable<boolean> {
    return this.logger.asObservable();
  }

  signIn(email: string, password: string): void {
    if(this.credentials.email === email && this.credentials.password === password) {
      localStorage.setItem('isAuthenticated',  'true');
      this.loggedIn = true;
      this.logger.next(this.loggedIn);

      console.log('setItem')
    } else {
      localStorage.removeItem('isAuthenticated');
      this.loggedIn = false;
      this.logger.next(this.loggedIn);

      console.log('removeItem')
    }
  }

  signOut(): void {
    localStorage.removeItem('isAuthenticated');
  }

  getUserInfo(): string {
    return 'test@gmail.com';
  }
}
