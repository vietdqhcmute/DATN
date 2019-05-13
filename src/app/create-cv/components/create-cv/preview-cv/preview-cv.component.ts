import { Component, OnInit, Input } from '@angular/core';
import { CreateCvComponent } from '../create-cv.component';
import { Resume, Candidate } from 'src/app/models/CandidateData';

@Component({
  selector: 'app-preview-cv',
  templateUrl: './preview-cv.component.html',
  styleUrls: ['./preview-cv.component.scss']
})
export class PreviewCvComponent extends CreateCvComponent implements OnInit {
  @Input() previewResume: Resume;
  @Input() previewCandidate: Candidate;

  ngOnInit() {
  }

}
