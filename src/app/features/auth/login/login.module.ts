import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { LoginComponent } from './components';



@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    LoginComponent,
  ],
})
export class LoginModule { }
