import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogResumeProjectComponent } from './dialog-resume-project.component';

describe('DialogResumeProjectComponent', () => {
  let component: DialogResumeProjectComponent;
  let fixture: ComponentFixture<DialogResumeProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogResumeProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogResumeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
