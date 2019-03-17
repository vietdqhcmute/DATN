import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/CandidateData';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.scss']
})
export class CandidateProfileComponent implements OnInit {
  isAuthenticated = false;
  email: string;
  candidate: Candidate=null;
  testEmail = "vietdqhcmute@gmail.com";
  allowEdit = false;
  defaultImageURL = "../../../../assets/images/tho-bay-mau-28.png"
  constructor() { }

  ngOnInit() {
  }

}
