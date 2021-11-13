import { Component, Input } from "@angular/core";

import { of } from "rxjs";

import { ButtonSize, ButtonType } from '@shared';
import { CourseModel } from './../features/courses/models/course.model';

@Component({selector: 'app-header', template: ''})
export class HeaderStubComponent {
}

@Component({selector: 'app-breadcrumbs', template: ''})
export class BreadCrumbsStubComponent {
}

@Component({selector: 'app-courses-list', template: ''})
export class CoursesListStubComponent {
}

@Component({selector: 'app-course-add', template: ''})
export class CourseAddStubComponent {
}

@Component({selector: 'app-course-item', template: ''})
export class CourseItemStubComponent {
  @Input() course = of({} as CourseModel);
}

@Component({selector: 'app-courses-serach', template: ''})
export class CoursesSearchStubComponent {
}

@Component({selector: 'app-footer', template: ''})
export class FooterStubComponent {
}

@Component({selector: 'app-button', template: ''})
export class ButtonStubComponent {
  @Input() buttonType = {} as ButtonType;
  @Input() buttonSize = {} as ButtonSize;
}
