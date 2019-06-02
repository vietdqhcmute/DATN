import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPreviewArticleComponent } from './modal-preview-article.component';

describe('ModalPreviewArticleComponent', () => {
  let component: ModalPreviewArticleComponent;
  let fixture: ComponentFixture<ModalPreviewArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPreviewArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPreviewArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
