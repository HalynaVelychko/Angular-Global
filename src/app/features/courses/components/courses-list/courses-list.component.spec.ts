import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import {By} from "@angular/platform-browser";
import { testHelper } from './../../../../mock/test-helper';
import { CourseModel } from './../../models/course.model';
import { CourseAddStubComponent, CourseItemStubComponent, CoursesSearchStubComponent } from '../../../../mock/components.mock';

describe('CourseListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  const declarations = [
    CoursesSearchStubComponent,
    CourseItemStubComponent,
    CourseAddStubComponent,
  ]
  testHelper(CoursesListComponent, declarations, [], [] )

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be triggered delete button', () => {
    spyOn(console, "log");
    const courseItem = fixture.debugElement.query(By.css('app-course-item'));
    courseItem.triggerEventHandler('deleteCourse', {});
    component.onDeleteCourse({} as CourseModel);
    expect(console.log).toHaveBeenCalled();
  });

  it('should be triggered edit button', () => {
    spyOn(console, "log");
    const courseItem = fixture.debugElement.query(By.css('app-course-item'));
    courseItem.triggerEventHandler('editCourse', {});
    component.onEditCourse({} as CourseModel);
    expect(console.log).toHaveBeenCalled();
  });

  it('should be triggered edit button', () => {
    spyOn(console, "log");
    const courseItem = fixture.debugElement.query(By.css('app-courses-serach'));
    courseItem.triggerEventHandler('searchData', {});
    fixture.detectChanges();
    expect(console.log).toHaveBeenCalled();
  });
});

