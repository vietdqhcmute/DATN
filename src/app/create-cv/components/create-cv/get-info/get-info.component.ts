import { Component, OnInit, Input } from '@angular/core';
import { CreateCvComponent } from '../create-cv.component';
import { Resume } from 'src/app/models/CandidateData';

@Component({
  selector: 'app-get-info',
  templateUrl: './get-info.component.html',
  styleUrls: ['./get-info.component.scss']
})
export class GetInfoComponent extends CreateCvComponent implements OnInit {
  @Input() resume: Resume;

  ngOnInit() {
  }

}
