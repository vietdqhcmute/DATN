import { Component, OnInit } from '@angular/core';
import { CreateCvComponent } from '../create-cv.component';

@Component({
  selector: 'app-preview-cv',
  templateUrl: './preview-cv.component.html',
  styleUrls: ['./preview-cv.component.scss']
})
export class PreviewCvComponent extends CreateCvComponent implements OnInit {


  ngOnInit() {
  }

}
