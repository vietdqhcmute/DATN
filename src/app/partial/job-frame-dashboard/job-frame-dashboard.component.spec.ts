import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFrameDashboardComponent } from './job-frame-dashboard.component';

describe('JobFrameDashboardComponent', () => {
  let component: JobFrameDashboardComponent;
  let fixture: ComponentFixture<JobFrameDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobFrameDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobFrameDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
