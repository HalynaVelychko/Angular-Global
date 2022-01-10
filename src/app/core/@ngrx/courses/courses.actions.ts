import { createAction, props } from '@ngrx/store';
import { CourseModel } from 'src/app/features/courses/models/course.model';

export enum CoursesActions {
  GetCoursesList = '[Courses List] GET_COURSES',
  GetCoursesListSuccess = '[Courses List] GET_COURSES_SUCCESS',
  GetCoursesListFail = '[Courses List] GET_COURSES_FAIL',
  AddCourse = '[Course Form Page] ADD_COURSE',
  AddCourseSuccess = '[Course Form Page] ADD_COURSE_SUCCESS',
  EditCourse = '[Course Form Page] EDIT_COURSE',
  EditCourseSuccess = '[Course Form Page] EDIT_COURSE_SUCCESS',
  DeleteCourse = '[Courses List] DELETE_COURSE',
  DeleteCourseSuccess = '[Courses List] DELETE_COURSE_SUCCESS'
}

export const getCourses = createAction(CoursesActions.GetCoursesList);
export const getCoursesSuccess = createAction(CoursesActions.GetCoursesListSuccess, props<{ courses: CourseModel[] }>());
export const getCoursesFail = createAction(CoursesActions.GetCoursesListFail, props<{ error: Error }>());
