import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, LogoComponent } from './components';



@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule { }
