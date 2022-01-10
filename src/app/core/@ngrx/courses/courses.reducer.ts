import { Action, createReducer, on } from '@ngrx/store';
import { initialState, CoursesState} from './courses.state';
import * as CoursesActions from './courses.actions'


export const coursesFeatureKey = 'courses';


export const reducer = createReducer(
  initialState,
  on(CoursesActions.getCourses, state => {
    console.log('GET_Courses action being handled!');
    return { ...state, isLoading: true }
  }),
  on(CoursesActions.getCoursesSuccess, (state, { courses }) => {
    console.log('GET_Courses_SUCCESS action being handled!');
    // const data = [...courses ];
    return { ...state, courses, isLoading: false }
  }),
  on(CoursesActions.getCoursesFail, (state, { error }) => {
    return { ...state, loading: false, error }
  }),
);

export function coursesReducer(state: CoursesState, action: Action){
  return reducer(state, action)
}
