import { AuthService } from './features/auth/login/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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
    // this.authService.isAuthenticated().subscribe(logSuccess => {
    //   this.isLogged = logSuccess;
    // })
    console.log(this.isLogged)
  }

  onActivate($event: any, routerOutlet: RouterOutlet): void {
    console.log('Activated Component', $event, routerOutlet);
  }

  onDeactivate($event: any, routerOutlet: RouterOutlet): void {
      console.log('Deactivated Component', $event, routerOutlet);
  }

}
