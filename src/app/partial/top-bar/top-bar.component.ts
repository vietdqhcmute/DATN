import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Subscription } from "rxjs";
import { Candidate } from "src/app/models/CandidateData";
import { CandidateService } from "src/app/services/candidate.service";
import { RecruiterService } from "src/app/services/recruiter.service";
import { Recruiter } from "src/app/models/RecruiterData";
import { Router } from "@angular/router";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"]
})
export class TopBarComponent implements OnInit {
  private isAuthenticated: boolean = false;
  private candidate: Candidate;
  private recruiterEmail: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private candidateService: CandidateService,
    private recruiterService: RecruiterService
  ) {}

  ngOnInit() {
    this.authService.getUserAuthenticated().subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
      this.candidateService.getCandidateObservable().subscribe(candidate => {
        const auth = this.getAuthBrowser();
        if (auth.role === 1) {
          this.candidate = candidate;
        }
      });
      this.recruiterService.getRecruiterObservable().subscribe(recruiter => {
        const auth = this.getAuthBrowser();
        if (auth.role === 2) {
          this.recruiterEmail = auth.email;
        }
      });
    });
  }
  onLogOut() {
    this.clearData();
    this.authService.logout();
  }
  onCreateCV() {
    this.router.navigate(["profile", this.candidate.email, "create-cv"], {
      queryParams: { edit: true }
    });
  }
  onBackToDashboard() {
    this.router.navigate(["recruiter", this.recruiterEmail]);
  }
  getAuthBrowser() {
    return this.authService.getAuthData();
  }
  clearData() {
    this.candidate = null;
  }
}
