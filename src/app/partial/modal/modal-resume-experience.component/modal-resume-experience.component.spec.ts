import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalResumeExperienceComponent } from './modal-resume-experience.component';

describe('ModalResumeExperienceComponent', () => {
  let component: ModalResumeExperienceComponent;
  let fixture: ComponentFixture<ModalResumeExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalResumeExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalResumeExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
