import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogResumeExperienceComponent } from './dialog-resume-experience.component';

describe('DialogResumeExperienceComponent', () => {
  let component: DialogResumeExperienceComponent;
  let fixture: ComponentFixture<DialogResumeExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogResumeExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogResumeExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
