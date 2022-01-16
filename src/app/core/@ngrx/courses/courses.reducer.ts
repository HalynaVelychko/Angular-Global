import { Action, createReducer, on } from '@ngrx/store';
import { initialState, CoursesState} from './courses.state';
import * as CoursesActions from './courses.actions'


export const coursesFeatureKey = 'courses';


export const reducer = createReducer(
  initialState,
  on(CoursesActions.getCourses, state => {
    return { ...state, isLoading: true }
  }),
  on(CoursesActions.getCoursesSuccess, (state, { courses }) => {
    return { ...state, courses, isLoading: false }
  }),
  on(CoursesActions.getCoursesFail, (state, { error })  => {
    return { ...state, isLoading: false, error}
  }),

  on(CoursesActions.loadMoreCourses, state => {
    return { ...state, isLoading: true }
  }),
  on(CoursesActions.loadMoreCoursesSuccess, (state, { courses }) => {
    return { ...state, courses, isLoading: false }
  }),
  on(CoursesActions.loadMoreCoursesFail, state => {
    return { ...state, isLoading: false }
  }),

  on(CoursesActions.getCourse, state => {
    return { ...state, isLoading: true }
  }),
  on(CoursesActions.getCourseSuccess, (state, { course}) => {
    return {
      ...state,
      course: course,
      isLoading: false,
    }
  }),
  on(CoursesActions.getCourseFail, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error,
    }
  }),

  on(CoursesActions.editCourse, (state) => {
    return { ...state, isLoading: true}
  }),
  on(CoursesActions.editCourseSuccess, (state, { course }) => {
    return {
      ...state,
      course,
      isLoading: false,
    }
  }),
);

export function coursesReducer(state: CoursesState, action: Action){
  return reducer(state, action)
}
