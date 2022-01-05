import { CourseModel } from './../../features/courses/models/course.model';
import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import {  switchMap } from 'rxjs/operators';

@Pipe({
  name: 'filterBy',
})
export class FilterPipe implements PipeTransform {
  filteredArr!: CourseModel[];

  transform(arr: Observable<CourseModel[]>, searchValue: string): Observable<CourseModel[]>  {
    if(!searchValue) {
      return arr;
    }
    return arr.pipe(
      switchMap((items: CourseModel[]) => {
        this.filteredArr = items.filter(item =>  item.name.toLowerCase().includes(searchValue.toLowerCase()))

        return of(this.filteredArr);
      }),
    )
  }
}


