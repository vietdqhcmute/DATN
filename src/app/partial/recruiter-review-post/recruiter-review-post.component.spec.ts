import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterReviewPostComponent } from './recruiter-review-post.component';

describe('RecruiterReviewPostComponent', () => {
  let component: RecruiterReviewPostComponent;
  let fixture: ComponentFixture<RecruiterReviewPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterReviewPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterReviewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
