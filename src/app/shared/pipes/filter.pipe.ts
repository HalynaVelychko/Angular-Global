import { CourseModel } from './../../features/courses/models/course.model';
import { OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform, OnDestroy {
  subscription!: Subscription;
  filteredArr!: CourseModel[];

  transform(arr: Observable<CourseModel[]>, searchValue: string): Observable<CourseModel[]> | CourseModel[] {
    if (!searchValue) {
      return arr;
    }
   this.subscription = arr.subscribe((data) => {
      this.filteredArr = data.filter(item =>  item.title.toLowerCase().includes(searchValue.toLowerCase()))
    })
    return this.filteredArr;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}


