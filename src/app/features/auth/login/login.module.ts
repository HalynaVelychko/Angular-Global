import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { LoginComponent } from './components';
import { IfAuthenticatedDirective } from './directives/if-authenticated.directive';



@NgModule({
  declarations: [
    LoginComponent,
    IfAuthenticatedDirective,
  ],
  imports: [
    SharedModule,
    FormsModule,
  ],
  exports: [
    LoginComponent,
    IfAuthenticatedDirective,
  ],
})
export class LoginModule { }
