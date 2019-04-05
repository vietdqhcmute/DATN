import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFrameComponent } from './company-frame.component';

describe('CompanyFrameComponent', () => {
  let component: CompanyFrameComponent;
  let fixture: ComponentFixture<CompanyFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
