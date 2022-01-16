import { createAction, props } from '@ngrx/store';
import { CourseModel } from 'src/app/features/courses/models/course.model';

export enum CoursesActions {
  GetCoursesList = '[Courses List] GET_COURSES',
  GetCoursesListSuccess = '[Courses List] GET_COURSES_SUCCESS',
  GetCoursesListFail = '[Courses List] GET_COURSES_FAIL',
  GetCourse = '[Course Form Page] GET_COURSE',
  GetCourseSuccess = '[Course Form Page] GET_COURSE_SUCCESS',
  GetCourseFail = '[Courses Form Page] GET_COURSE_FAIL',
  LoadMoreCoursesList = '[Courses List] LOAD_MORE_COURSES',
  LoadMoreCoursesListSuccess = '[Courses List] LOAD_MORE_COURSES_SUCCESS',
  LoadMoreCoursesListFail = '[Courses List] LOAD_MORE_COURSES_FAIL',
  AddCourse = '[Course Form Page] ADD_COURSE',
  AddCourseSuccess = '[Course Form Page] ADD_COURSE_SUCCESS',
  AddCourseFail = '[Course Form Page] ADD_COURSE_Fail',
  EditCourse = '[Course Form Page] EDIT_COURSE',
  EditCourseSuccess = '[Course Form Page] EDIT_COURSE_SUCCESS',
  EditCourseFail = '[Course Form Page] EDIT_COURSE_Fail',
  DeleteCourse = '[Courses List] DELETE_COURSE',
  DeleteCourseSuccess = '[Courses List] DELETE_COURSE_SUCCESS',
  DeleteCourseFail = '[Courses List] DELETE_COURSE_FAIL',
}

export const getCourses = createAction(CoursesActions.GetCoursesList);
export const getCoursesSuccess = createAction(CoursesActions.GetCoursesListSuccess, props<{ courses: CourseModel[] }>());
export const getCoursesFail = createAction(CoursesActions.GetCoursesListFail, props<{ error: Error }>());

export const loadMoreCourses = createAction(CoursesActions.LoadMoreCoursesList);
export const loadMoreCoursesSuccess = createAction(CoursesActions.LoadMoreCoursesListSuccess, props<{ courses: CourseModel[] }>());
export const loadMoreCoursesFail = createAction(CoursesActions.LoadMoreCoursesListFail, props<{ error: Error }>());

export const addCourse = createAction(CoursesActions.AddCourse);
export const addCourseSuccess = createAction(CoursesActions.AddCourseSuccess, props<{ course: CourseModel }>());
export const addCourseFail = createAction(CoursesActions.AddCourseFail, props<{ error: Error }>());

export const getCourse = createAction(CoursesActions.GetCourse, props<{ id: number }>());
export const getCourseSuccess = createAction(CoursesActions.GetCourseSuccess, props<{ course: CourseModel }>());
export const getCourseFail = createAction(CoursesActions.GetCourseFail, props<{ error: Error }>());

export const editCourse = createAction(CoursesActions.EditCourse, props<{ id: number, course: CourseModel | null}>());
export const editCourseSuccess = createAction(CoursesActions.EditCourseSuccess, props<{ course: CourseModel }>());
export const editCourseFail = createAction(CoursesActions.EditCourseFail, props<{ error: Error }>());

export const deleteCourse = createAction(CoursesActions.DeleteCourse);
export const deleteCourseSuccess = createAction(CoursesActions.DeleteCourseSuccess, props<{ id: number }>());
export const deleteCourseFail = createAction(CoursesActions.DeleteCourseFail, props<{ error: Error }>());

