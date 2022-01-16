import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { apiUrl, AUTH_API } from '../../../../api/api.config';
import { LoginModel, UserModel } from './../components/model/user.model';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string = '';
  userInfo!: Observable<UserModel>;
  redirectUrl!: string;
  logger$$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    if(token) {
      this.logger$$.next(true);
    };
  }

  get tokenFromLs(): string | null {
    return localStorage.getItem('token');
  }

  signIn(user: LoginModel): Observable<{token: string}> {
    const url = `${apiUrl}${AUTH_API.login}`;
    return this.http.post<{token: string}>(url, user).pipe(
      tap((response: {token: string}) => {
        this.logger$$.next(true);
        localStorage.setItem('token', response.token);
        this.token = response.token;
      }),
    )
  }

  signOut(): void {
    localStorage.removeItem('token');
    this.logger$$.next(false);
  }

  getUserInfo(): Observable<UserModel> {
    const url = `${apiUrl}${AUTH_API.userInfo}`
    return this.http.post<UserModel>(url, { token: this.tokenFromLs })
  }
}
