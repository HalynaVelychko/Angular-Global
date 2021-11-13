import { TestBed } from '@angular/core/testing';
import { ButtonStubComponent } from './components.mock';

export const testHelper = (TestedComponents: any, declarations: any, imports: any, providers: any ) => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: imports,
      providers: providers,
      declarations: [TestedComponents, ButtonStubComponent, ...declarations],
    }).compileComponents();
  });
}
