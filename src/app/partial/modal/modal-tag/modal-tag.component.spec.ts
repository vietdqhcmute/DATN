import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTagComponent } from './modal-tag.component';

describe('ModalTagComponent', () => {
  let component: ModalTagComponent;
  let fixture: ComponentFixture<ModalTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
