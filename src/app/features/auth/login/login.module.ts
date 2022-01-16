import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { LoginComponent } from './components';
import { IfAuthenticatedDirective } from './directives/if-authenticated.directive';
import { TokenInterceptor } from './interceptors/token.interceptor';



@NgModule({
  declarations: [
    LoginComponent,
    IfAuthenticatedDirective,
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    LoginComponent,
    IfAuthenticatedDirective,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
})
export class LoginModule { }
