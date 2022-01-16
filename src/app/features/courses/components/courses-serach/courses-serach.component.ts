import { SearchConfig } from './courses-search.config';
import { Component, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { ButtonType, ButtonSize } from '@shared';
import { Subject } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-courses-serach',
  templateUrl: './courses-serach.component.html',
  styleUrls: ['./courses-serach.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesSerachComponent implements OnInit  {
  buttonSize = ButtonSize.LARGE;
  buttonType = ButtonType.GREEN;

  searchCourse$ = new Subject<string>();

  @Output() searchData: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.searchCourse$.pipe(
      debounceTime(SearchConfig.DEBOUNCE_TIME),
      filter((query: string) => query.length >= 3),
    ).subscribe((searchValue) => this.searchData.emit(searchValue));
  }

  searchValue(query: string) {
    this.searchCourse$.next(query)
  }
}
