import { AuthService } from './../../../features/auth/login/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonType, ButtonSize } from '@shared';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/features/auth/login/components/model/user.model';

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
    private authService: AuthService) { }

  ngOnInit(): void {
    this.user$ = this.authService.getUserInfo();
    this.isAuthorized$ = this.authService.logger$$.asObservable();
  }
  onLogOut(): void {
    this.authService.signOut();
    this.router.navigate(['/login']);
  }
}
