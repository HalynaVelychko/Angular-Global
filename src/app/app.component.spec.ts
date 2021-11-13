import { HeaderStubComponent, FooterStubComponent, CoursesListStubComponent, BreadCrumbsStubComponent } from './mock/components.mock';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderStubComponent,
        FooterStubComponent,
        CoursesListStubComponent,
        BreadCrumbsStubComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
