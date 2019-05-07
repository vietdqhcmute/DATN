import { Component, OnInit } from '@angular/core';
import { CreateCvComponent } from '../create-cv.component';

@Component({
  selector: 'app-get-info',
  templateUrl: './get-info.component.html',
  styleUrls: ['./get-info.component.scss']
})
export class GetInfoComponent extends CreateCvComponent implements OnInit {

  ngOnInit() {
  }

}
