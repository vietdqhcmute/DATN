import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRecruiterManagerComponent } from './admin-recruiter-manager.component';

describe('AdminRecruiterManagerComponent', () => {
  let component: AdminRecruiterManagerComponent;
  let fixture: ComponentFixture<AdminRecruiterManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRecruiterManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRecruiterManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
