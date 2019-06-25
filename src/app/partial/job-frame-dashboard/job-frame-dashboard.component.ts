import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ArticleService } from "src/app/services/article.service";
import { Router } from "@angular/router";
import { RecruiterService } from "src/app/services/recruiter.service";
import { AuthService } from "src/app/services/auth.service";
import { Recruiter } from 'src/app/models/RecruiterData';

@Component({
  selector: "app-job-frame-dashboard",
  templateUrl: "./job-frame-dashboard.component.html",
  styleUrls: ["./job-frame-dashboard.component.scss"]
})
export class JobFrameDashboardComponent implements OnInit {
  @Input() jobDescription: any;
  @Input() email: string;
  articleImageURL: string;
  isAuthenticated: boolean = false;
  recruiter: Recruiter;
  constructor(
    private recruiterService: RecruiterService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (this.authService.isSavedAuthData()) {
      this.isAuthenticated = true;
    }
    this.getArticleImageURL();
  }

  getArticleImageURL() {
    this.recruiterService.getRecruiterAPI(this.email).subscribe(recruiter => {
      this.recruiter = recruiter;
    });
  }
}
