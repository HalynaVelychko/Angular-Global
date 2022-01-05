import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { PathNotFoundComponent } from './components';


@NgModule({
  declarations: [
    PathNotFoundComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    PathNotFoundComponent,
  ],
})
export class LayoutModule { }
