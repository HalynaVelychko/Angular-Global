import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { take} from "rxjs/operators";

import { CourseModel } from './../../models/course.model';
import { ButtonStubComponent } from 'src/app/mock/components.mock';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseItemComponent, ButtonStubComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select course on delete event', () => {
    const mockCourse: CourseModel = {
      id: 1,
      title: 'VIdeo Course 1',
      creationDate: new Date(2021, 2, 12),
      duration: 28,
      description: 'Learn about where you can find course descriptions',
    };

    component.course = mockCourse;
    component.deleteCourse.pipe(take(1)).subscribe((selectedCourse: CourseModel) => expect(selectedCourse).toBe(component.course));
    component.onDeleteCourse();
  });

  it('should select course on edit event', () => {
    const mockCourse: CourseModel = {
      id: 1,
      title: 'VIdeo Course 1',
      creationDate: new Date(2021, 2, 12),
      duration: 28,
      description: 'Learn about where you can find course descriptions',
    };

    component.course = mockCourse;
    component.editCourse.pipe(take(1)).subscribe((selectedCourse: CourseModel) => expect(selectedCourse).toBe(component.course));
    component.onEditCourse();
  });
});

