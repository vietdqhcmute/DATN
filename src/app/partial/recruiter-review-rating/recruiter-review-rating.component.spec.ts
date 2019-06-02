import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterReviewRatingComponent } from './recruiter-review-rating.component';

describe('RecruiterReviewRatingComponent', () => {
  let component: RecruiterReviewRatingComponent;
  let fixture: ComponentFixture<RecruiterReviewRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterReviewRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterReviewRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
