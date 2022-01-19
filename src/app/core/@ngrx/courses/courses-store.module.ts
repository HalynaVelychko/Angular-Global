import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { coursesFeatureKey, coursesReducer } from './courses.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CoursesEffects } from './courses.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(coursesFeatureKey, coursesReducer),
    EffectsModule.forFeature([CoursesEffects]),
  ],
})
export class CoursesStoreModule { }
