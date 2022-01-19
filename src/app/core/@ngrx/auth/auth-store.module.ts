import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { authFeaturesKey, authReducer } from './auth.reducer';
import { AuthEffects } from './auth.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(authFeaturesKey, authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthStoreModule { }
