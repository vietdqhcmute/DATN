import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Subscription } from "rxjs";
import { Candidate } from "src/app/models/CandidateData";
import { CandidateService } from "src/app/services/candidate.service";
import { RecruiterService } from 'src/app/services/recruiter.service';
import { Recruiter } from 'src/app/models/RecruiterData';

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"]
})
export class TopBarComponent implements OnInit {
  private isAuthenticated: boolean = false;
  sub: Subscription;
  candidate: Candidate;
  recruiter: Recruiter;
  constructor(
    private authService: AuthService,
    private candidateService: CandidateService,
    private recruiterService: RecruiterService
  ) {}
  ngOnInit() {
    this.authService.getUserAuthenticated().subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
    this.candidateService.getCandidateObservable().subscribe(candidate => {
      this.candidate = candidate;
    });
    this.recruiterService.getRecruiterObservable().subscribe(recruiter =>{
      this.recruiter = recruiter;
    })
  }
  onLogOut() {
    this.authService.logout();
  }
}
