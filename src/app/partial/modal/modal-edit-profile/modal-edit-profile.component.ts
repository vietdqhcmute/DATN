import { Component, OnInit, Input } from '@angular/core';
import { Candidate } from 'src/app/models/CandidateData';
import { ContentObserver } from '@angular/cdk/observers';

@Component({
  selector: 'app-modal-edit-profile',
  templateUrl: './modal-edit-profile.component.html',
  styleUrls: ['./modal-edit-profile.component.scss']
})
export class ModalEditProfileComponent implements OnInit {
  @Input() candidate: Candidate;
  constructor() { }

  ngOnInit() {
  }

}
