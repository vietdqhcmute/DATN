import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogResumeEducationComponent } from './dialog-resume-education.component';

describe('DialogResumeEducationComponent', () => {
  let component: DialogResumeEducationComponent;
  let fixture: ComponentFixture<DialogResumeEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogResumeEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogResumeEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
