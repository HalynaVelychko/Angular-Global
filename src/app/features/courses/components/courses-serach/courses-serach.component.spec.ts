import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { take } from 'rxjs/operators';

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

  it('should put the search query', (() => {
    const input = fixture.debugElement.query(By.css('.form-control'));
    input.nativeElement.value = 'search query';
    input.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(input.nativeElement.value).toContain('search query');
  }));

  it('should console.log input data',  () => {
    spyOn(console, "log");
    const searchQueryData = 'search query';
    component.inputData = searchQueryData;
    component.searchData.pipe(take(1)).subscribe((inputValue: string) => expect(inputValue).toBe(searchQueryData))
    component.onSubmit();
  });
});
