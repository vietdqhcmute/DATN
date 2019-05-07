import { Component, OnInit } from "@angular/core";
import { CandidateService } from "src/app/services/candidate.service";
import { AuthService } from 'src/app/services/auth.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Candidate, Resume } from 'src/app/models/CandidateData';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: "app-create-cv",
  templateUrl: "./create-cv.component.html",
  styleUrls: ["./create-cv.component.scss"]
})
export class CreateCvComponent implements OnInit {
  protected candidate: Candidate = null;
  protected paramsEmail: String;
  private sub: Subscription;
  resume: Resume;

  constructor(
    protected candidateService: CandidateService,
    protected authService: AuthService,
    protected titleService: Title,
    protected route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      this.paramsEmail = params.get("email");
      this.loadCandidateData(this.paramsEmail);
      this.titleService.setTitle("Profile of " + this.paramsEmail);
    });
  }
  private loadCandidateData(email) {
    this.sub = this.candidateService
      .getCandidateByEmail(email)
      .pipe(first())
      .subscribe(candidate => {
        this.candidate = <Candidate>candidate;
      });
  }
}
