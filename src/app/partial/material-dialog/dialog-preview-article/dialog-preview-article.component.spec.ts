import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPreviewArticleComponent } from './dialog-preview-article.component';

describe('DialogPreviewArticleComponent', () => {
  let component: DialogPreviewArticleComponent;
  let fixture: ComponentFixture<DialogPreviewArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPreviewArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPreviewArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
