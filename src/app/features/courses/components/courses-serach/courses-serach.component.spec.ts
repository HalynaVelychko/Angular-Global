import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { testHelper } from './../../../../mock/test-helper';
import { By } from '@angular/platform-browser';

import { CoursesSerachComponent } from './courses-serach.component';

describe('CoursesSerachComponent', () => {
  let component: CoursesSerachComponent;
  let fixture: ComponentFixture<CoursesSerachComponent>;

  const imports = [FormsModule]
  testHelper(CoursesSerachComponent, [], imports, [])

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

  it('it should emit the inputData',  () => {
    spyOn(component.searchData, 'emit');
    const searchQueryData = 'search query';
    component.inputData = searchQueryData;
    component.onSubmit();
    expect(component.searchData.emit).toHaveBeenCalledWith('search query');
  });
});
