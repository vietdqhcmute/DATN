import { Component, OnInit, OnDestroy, AfterViewInit, Inject } from "@angular/core";
import { CandidateService } from "src/app/services/candidate.service";
import { AuthService } from "src/app/services/auth.service";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { Candidate, Resume } from "src/app/models/CandidateData";
import { Subscription } from "rxjs";
import { first } from "rxjs/operators";
import { ResumeService } from "src/app/services/resume.service";
import { AlertService } from "src/app/services/alert.service";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-create-cv",
  templateUrl: "./create-cv.component.html",
  styleUrls: ["./create-cv.component.scss"]
})
export class CreateCvComponent implements OnInit, OnDestroy, AfterViewInit {
  candidate: Candidate = new Candidate();
  resume: Resume = new Resume();
  canEdit: boolean;
  paramsEmail: String;
  sub: Subscription[] = [];

  constructor(
    @Inject(Window) protected window: Window,
    protected candidateService: CandidateService,
    protected authService: AuthService,
    protected titleService: Title,
    protected alertService: AlertService,
    protected route: ActivatedRoute,
    protected resumeService: ResumeService,
    protected dialog: MatDialog
  ) {}

  ngOnInit() {
    this.alertService.setHideTopBar(false);
    this.sub.push(
      this.route.paramMap.subscribe(params => {
        this.paramsEmail = params.get("email");
        this.loadCandidateData(this.paramsEmail);
      })
    );
  }
  ngAfterViewInit(): void {
    this.getQueryParams();
  }
  ngOnDestroy(): void {
    this.sub.forEach(subscription => subscription.unsubscribe());
  }

  loadCandidateData(email) {
    this.sub.push(
      this.candidateService.getCandidate(email).subscribe(candidate => {
        this.candidate = <Candidate>candidate;
        this.resume = this.candidate.resume;
        this.titleService.setTitle("Profile of " + this.candidate.full_name);
      })
    );
  }

  getQueryParams() {
    this.sub.push(
      this.route.parent.queryParams.subscribe(queryParams => {
        if (!queryParams) {
          return;
        }
        this.canEdit = Boolean(JSON.parse(queryParams.edit));
      })
    );
  }
}
