import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { CandidateService } from "../services/candidate.service";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { Candidate } from "../models/CandidateData";
import { AlertService } from "../services/alert.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-candidate",
  templateUrl: "./candidate.component.html",
  styleUrls: ["./candidate.component.scss"]
})
export class CandidateComponent implements OnInit, OnDestroy, AfterViewInit {
  isAuthenticated: boolean;
  candidate: Candidate = null;
  sub: Subscription[] = [];
  constructor(
    protected authService: AuthService,
    protected candidateService: CandidateService,
    protected titleService: Title,
    protected route: ActivatedRoute,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.sub.push(
      this.authService.getUserAuthenticated().subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      })
    );
  }
  ngAfterViewInit(): void {
    this.alertService.setHideTopBar(false);
  }
  ngOnDestroy(): void {
    this.sub.forEach(subscription => subscription.unsubscribe());
  }
}
