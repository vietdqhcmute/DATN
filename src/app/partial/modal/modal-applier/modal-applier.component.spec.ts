import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalApplierComponent } from './modal-applier.component';

describe('ModalApplierComponent', () => {
  let component: ModalApplierComponent;
  let fixture: ComponentFixture<ModalApplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalApplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalApplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
