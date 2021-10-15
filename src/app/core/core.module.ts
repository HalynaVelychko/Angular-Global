import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, FooterComponent } from './components';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
  ],
})
export class CoreModule { }
