import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalResumeEducationComponent } from './modal-resume-education.component';

describe('ModalResumeEducationComponent', () => {
  let component: ModalResumeEducationComponent;
  let fixture: ComponentFixture<ModalResumeEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalResumeEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalResumeEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
