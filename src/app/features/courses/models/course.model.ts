export interface CourseModel {
  id: number;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
  toRated?: boolean;
}
