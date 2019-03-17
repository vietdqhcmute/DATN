import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterCreatePostComponent } from './recruiter-create-post.component';

describe('RecruiterCreatePostComponent', () => {
  let component: RecruiterCreatePostComponent;
  let fixture: ComponentFixture<RecruiterCreatePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterCreatePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterCreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
