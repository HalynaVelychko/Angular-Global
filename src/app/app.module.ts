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
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
