import { AuthService } from './../../../features/auth/login/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonType, ButtonSize } from '@shared';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/features/auth/login/components/model/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../@ngrx/app.state';
import { filter, switchMap } from 'rxjs/operators';
import * as AuthActions from '../../@ngrx/auth/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit  {
  buttonType = ButtonType.TRANSPARENT;
  buttonSize = ButtonSize.SMALL;
  user$!: Observable<UserModel>;
  isAuthorized$!: Observable<boolean>;

  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store<AppState>,
    ) { }

  ngOnInit(): void {
    this.isAuthorized$ = this.authService.logger$$.asObservable();
    this.user$ = this.isAuthorized$.pipe(
      filter(data => !!data),
      switchMap(() => this.authService.getUserInfo()),
    );
  }

  onLogOut(): void {
    this.store.dispatch(AuthActions.removeToken())
  }
}
