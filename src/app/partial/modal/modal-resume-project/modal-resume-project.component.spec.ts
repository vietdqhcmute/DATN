import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalResumeProjectComponent } from './modal-resume-project.component';

describe('ModalResumeProjectComponent', () => {
  let component: ModalResumeProjectComponent;
  let fixture: ComponentFixture<ModalResumeProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalResumeProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalResumeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
