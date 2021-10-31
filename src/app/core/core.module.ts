import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { HeaderComponent, FooterComponent } from './components';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
  ],
})
export class CoreModule { }
