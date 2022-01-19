import { InputTypes } from './../../../../shared/components/input/input.model';
import { Component, OnInit } from '@angular/core';

import { CourseModel } from './../../models/course.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { CoursesService } from '../../services/courses.service';
import { BehaviorSubject,  Subscription } from 'rxjs';
import {  Store } from '@ngrx/store';
import { AppState, selectCourse} from 'src/app/core/@ngrx';
import * as CoursesActions from '../../../../core/@ngrx/courses/courses.actions';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { CoursePlaceholderType } from './course-form.config';


@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  course!: CourseModel;
  course$$ = new BehaviorSubject<CourseModel | null>(null);
  course$ = this.course$$.asObservable();
  currentCourseId!: Params;
  subscription!: Subscription;
  courseForm!: FormGroup;
  CoursePlaceholder = CoursePlaceholderType;
  inputTypes = InputTypes;


  get title(): FormControl {
    return this.courseForm.get('title') as FormControl;
  }

  get description(): FormControl {
    return this.courseForm.get('description') as FormControl;
  };

  get date(): FormControl {
    return this.courseForm.get('date') as FormControl;
  };

  get duration(): FormControl {
    return this.courseForm.get('duration') as FormControl;
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CoursesService,
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    ) {
    this.createCourseForm();
  }

  ngOnInit(): void {
    this.currentCourseId = this.route.snapshot.params;
    if(this.currentCourseId.courseID){
      console.log(this.currentCourseId.courseID)
      this.store.dispatch(CoursesActions.getCourse({ id: this.currentCourseId.courseID }));
      this.store.select(selectCourse).subscribe((data : any) =>
        this.courseForm = this.formBuilder.group({
          title: [data?.name, [Validators.required, Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*') ]],
          description: [data?.description, [Validators.required, Validators.maxLength(500)]],
          duration: [data?.length],
          date: '',
        }));
    }
  };


  onSave(course: CourseModel): void {
    if(this.route.routeConfig?.path === 'edit/:courseID') {
      this.store.dispatch(CoursesActions.editCourse({ id: +this.currentCourseId.courseID, course }));
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

  private createCourseForm(): void {
    this.courseForm = this.formBuilder.group({
      title: new FormControl('', [ Validators.required, Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*')]),
      description: new FormControl('', [ Validators.required, Validators.maxLength(500), Validators.pattern('[a-zA-Z ]*')]),
      date: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
    })
  }
}
