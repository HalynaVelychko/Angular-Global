import { CourseModel } from "src/app/features/courses/models/course.model";


export interface CoursesStateList {
  courses: ReadonlyArray<CourseModel>;
}

export interface CoursesState extends CoursesStateList{
  isLoading: boolean;
  error: Error | string | null;
}

export const initialState: CoursesState = {
  isLoading: false,
  error: null,
  courses: []
}
