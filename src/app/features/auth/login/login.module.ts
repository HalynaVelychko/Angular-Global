import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { LoginComponent } from './components';



@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
  ],
  exports: [
    LoginComponent,
  ],
})
export class LoginModule { }
