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
  sub: Subscription[] = [];
  candidate: Candidate;
  recruiter: Recruiter;
  constructor(
    private router: Router,
    private authService: AuthService,
    private candidateService: CandidateService,
    private recruiterService: RecruiterService
  ) {}
  ngOnInit() {
    this.sub.push(
      this.authService.getUserAuthenticated().subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
        this.candidateService.getCandidateObservable().subscribe(candidate => {
          this.candidate = candidate;
        });
        this.recruiterService.getRecruiterObservable().subscribe(recruiter => {
          this.recruiter = recruiter;
        });
      })
    );
  }
  onLogOut() {
    this.sub.forEach(subscription => subscription.unsubscribe());
    this.clearData();
    this.authService.logout();
  }
  onCreateCV() {
    this.router.navigate(["profile", this.candidate.email, "create-cv"], {
      queryParams: { edit: true }
    });
  }
  clearData() {
    delete this.candidate;
    delete this.recruiter;
  }
}
