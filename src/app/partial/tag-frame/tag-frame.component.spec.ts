import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagFrameComponent } from './tag-frame.component';

describe('TagFrameComponent', () => {
  let component: TagFrameComponent;
  let fixture: ComponentFixture<TagFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
