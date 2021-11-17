import { AuthService } from './features/auth/login/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLogged: boolean = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe(logSuccess => {
      this.isLogged = logSuccess;
    })
  }
}
