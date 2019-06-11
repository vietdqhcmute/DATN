import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-preview-article',
  templateUrl: './modal-preview-article.component.html',
  styleUrls: ['./modal-preview-article.component.scss']
})
export class ModalPreviewArticleComponent implements OnInit {
  @Input() article;
  constructor() { }

  ngOnInit() {
  }

}
