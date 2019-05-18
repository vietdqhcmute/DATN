import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Subscription } from "rxjs";
import { Candidate } from "src/app/models/CandidateData";
import { CandidateService } from "src/app/services/candidate.service";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"]
})
export class TopBarComponent implements OnInit {
  private isAuthenticated: boolean = false;
  sub: Subscription;
  candidate: Candidate;
  constructor(
    private authService: AuthService,
    private candidateService: CandidateService
  ) {}
  ngOnInit() {
    this.authService.getUserAuthenticated().subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
    this.candidateService.candidate.subscribe(candidate => {
      this.candidate = candidate;
    });
  }
  onLogOut() {
    this.authService.logout();
  }
}
