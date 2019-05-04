import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditProfileReruiterComponent } from './modal-edit-profile-reruiter.component';

describe('ModalEditProfileReruiterComponent', () => {
  let component: ModalEditProfileReruiterComponent;
  let fixture: ComponentFixture<ModalEditProfileReruiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditProfileReruiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditProfileReruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
