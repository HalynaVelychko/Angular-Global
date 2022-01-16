import { CourseModel } from "src/app/features/courses/models/course.model";


export interface CoursesStateList {
  courses: CourseModel[];
}

export interface CoursesState extends CoursesStateList{
  course: CourseModel | null;
  isLoading: boolean;
  error: Error | string | null;
}

export const initialState: CoursesState = {
  course: null,
  isLoading: false,
  error: null,
  courses: [],
}
