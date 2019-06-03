import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Education } from 'src/app/models/CandidateData';

@Component({
  selector: 'app-modal-resume-education',
  templateUrl: './modal-resume-education.component.html',
  styleUrls: ['./modal-resume-education.component.scss']
})
export class ModalResumeEducationComponent implements OnInit {
  @Output() saveClick: EventEmitter<Education> = new EventEmitter();
  constructor() { }
  private education: Education = {
    school_name: "",
    major: "",
    start_month: 0,
    end_month: 0,
    start_year: 0,
    end_year: 0,
    current: false
  };
  ngOnInit() {
  }
  onSave() {
    this.saveClick.emit(this.education);
  }

}
