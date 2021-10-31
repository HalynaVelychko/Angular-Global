import { CourseModel } from './../features/courses/models/course.model';


export const courseData: CourseModel[] = [
  {
    id: 1,
    title: 'VIdeo Course 1',
    creationDate: new Date(2021, 2, 12),
    duration: 28,
    description: 'Learn about where you can find course descriptions',
  },
  {
    id: 2,
    title: 'VIdeo Course 2',
    creationDate: new Date(2021, 6, 13),
    duration: 10,
    description: 'Learn about where you can find course descriptions',
  },
  {
    id: 3,
    title: 'VIdeo Course 3',
    creationDate: new Date(2021, 5, 14),
    duration: 14,
    description: 'Learn about where you can find course descriptions',
  },
];
