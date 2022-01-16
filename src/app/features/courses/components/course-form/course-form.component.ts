import { Component, OnDestroy, OnInit } from '@angular/core';

import { CourseModel } from './../../models/course.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { CoursesService } from '../../services/courses.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, selectCourse} from 'src/app/core/@ngrx';
import * as CoursesActions from '../../../../core/@ngrx/courses/courses.actions';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit, OnDestroy  {
  course!: CourseModel;
  course$$ = new BehaviorSubject<CourseModel | null>(null);
  course$ = this.course$$.asObservable();
  currentCourseId!: Params;
  subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CoursesService,
    private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.currentCourseId = this.route.snapshot.params;
    if(this.currentCourseId.courseID) {
      this.store.dispatch(CoursesActions.getCourse({ id: +this.currentCourseId.courseID }));
      this.getCourseById();
    } else {
      this.course$$.next({} as CourseModel)
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getCourseById(): void {
    this.subscription = this.store.select(selectCourse).subscribe(data => this.course$$.next(data));
  }


  onSave(id: number, course: CourseModel): void {
    if(this.route.routeConfig?.path === 'edit/:courseID') {
      this.store.dispatch(CoursesActions.editCourse({ id, course }));
    } else {
      //TODO: let finish this part with store
      this.course = { ...this.course, id: +Math.floor(Math.random()*100000), isTopRated: true }
      this.courseService.addCourse(this.course).subscribe((data) => {
        this.course = data;
      });
    }
    this.onCancel();
  }

  onCancel(): void {
    this.router.navigate(['/courses']);
  }
}
