import { createFeatureSelector, createSelector } from '@ngrx/store';

import { coursesFeatureKey } from './courses.reducer';
import { CoursesState } from './courses.state';

export const selectCoursesState = createFeatureSelector<CoursesState>(coursesFeatureKey);

export const selectCoursesData = createSelector(selectCoursesState, (state: CoursesState) => state.courses);
export const selectCoursesError = createSelector(selectCoursesState, (state: CoursesState) => state.error);
export const selectCoursesLoaded = createSelector(selectCoursesState, (state: CoursesState) => state.isLoading);
export const selectCourse = createSelector(selectCoursesState, (state: CoursesState) => state.course);


