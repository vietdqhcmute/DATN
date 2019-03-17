import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterSubcriberComponent } from './recruiter-subcriber.component';

describe('RecruiterSubcriberComponent', () => {
  let component: RecruiterSubcriberComponent;
  let fixture: ComponentFixture<RecruiterSubcriberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterSubcriberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterSubcriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
