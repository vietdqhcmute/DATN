import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterReviewComponent } from './recruiter-review.component';

describe('RecruiterReviewComponent', () => {
  let component: RecruiterReviewComponent;
  let fixture: ComponentFixture<RecruiterReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
