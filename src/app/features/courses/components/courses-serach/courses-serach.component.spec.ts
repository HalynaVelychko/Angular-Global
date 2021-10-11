import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesSerachComponent } from './courses-serach.component';

describe('CoursesSerachComponent', () => {
  let component: CoursesSerachComponent;
  let fixture: ComponentFixture<CoursesSerachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesSerachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesSerachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
