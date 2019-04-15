import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { CandidateService } from "../services/candidate.service";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { Candidate } from '../models/CandidateData';

@Component({
  selector: "app-candidate",
  templateUrl: "./candidate.component.html",
  styleUrls: ["./candidate.component.scss"]
})
export class CandidateComponent implements OnInit {
  userAuthenticated: boolean;
  candidate: Candidate = null;
  constructor(
    protected authService: AuthService,
    protected candidateService: CandidateService,
    protected titleService: Title,
    protected route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userAuthenticated = isAuthenticated;
    });
  }
}
