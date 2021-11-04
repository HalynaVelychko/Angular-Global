import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { take } from 'rxjs/operators';

import { CoursesSerachComponent } from './courses-serach.component';
import { ButtonStubComponent } from 'src/app/mock/components.mock';

describe('CoursesSerachComponent', () => {
  let component: CoursesSerachComponent;
  let fixture: ComponentFixture<CoursesSerachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ CoursesSerachComponent, ButtonStubComponent ],
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

  it('should update inputData', async (() => {
    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('.form-control'));
      input.nativeElement.value = 'test'
      input.nativeElement.dispatchEvent(new Event('input'));
      expect(fixture.componentInstance.inputData).toBe('test');
    });
  }));

  it('it should output the inputData',  () => {
    const searchQueryData = 'search query';
    component.inputData = searchQueryData;
    component.searchData.pipe(take(1)).subscribe((inputValue: string) => expect(inputValue).toBe(searchQueryData))
    component.onSubmit();
  });
});
