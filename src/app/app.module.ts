import { LayoutModule } from './layout/layout.module';
import { SharedModule } from '@shared';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoginModule } from '@feature';
import { CoursesModule } from '@feature';
import { CoreModule } from '@core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RootStoreModule } from './core/@ngrx/root-store.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    LoginModule,
    CoreModule,
    SharedModule,
    LayoutModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    RootStoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
