import { Component, OnInit } from "@angular/core";
import { CandidateService } from "src/app/services/candidate.service";
import { AuthService } from "src/app/services/auth.service";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { Candidate, Resume } from "src/app/models/CandidateData";
import { Subscription } from "rxjs";
import { first } from "rxjs/operators";
import { ResumeService } from "src/app/services/resume.service";
import { TestingService } from "src/app/services/testing.service";

@Component({
  selector: "app-create-cv",
  templateUrl: "./create-cv.component.html",
  styleUrls: ["./create-cv.component.scss"]
})
export class CreateCvComponent implements OnInit {
  candidate: Candidate = new Candidate();
  resume: Resume = new Resume();
  protected paramsEmail: String;
  private sub: Subscription;

  protected testingResume = this.testingService.resume;
  protected education = this.testingResume.education;
  protected experience = this.testingResume.experience;
  protected project = this.testingResume.project;

  constructor(
    protected candidateService: CandidateService,
    protected authService: AuthService,
    protected titleService: Title,
    protected route: ActivatedRoute,
    protected resumeService: ResumeService,
    protected testingService: TestingService
  ) {}

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      this.paramsEmail = params.get("email");
      this.loadCandidateData(this.paramsEmail);
    });
  }
  private loadCandidateData(email) {
    this.candidateService.getCandidate(email).subscribe(candidate=>{
      this.candidate = <Candidate>candidate;
      this.resume = this.candidate.resume;
      this.titleService.setTitle("Profile of " + this.candidate.full_name);
    });
  }
}
