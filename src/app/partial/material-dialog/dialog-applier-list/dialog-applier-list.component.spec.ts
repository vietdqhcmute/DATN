import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogApplierListComponent } from './dialog-applier-list.component';

describe('DialogApplierListComponent', () => {
  let component: DialogApplierListComponent;
  let fixture: ComponentFixture<DialogApplierListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogApplierListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogApplierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
