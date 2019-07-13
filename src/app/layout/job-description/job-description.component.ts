import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RecruiterService } from "src/app/services/recruiter.service";
import { Subscription } from "rxjs";
import { ArticleService } from "src/app/services/article.service";
import { AuthService } from "src/app/services/auth.service";
import { Recruiter, Articles } from "src/app/models/RecruiterData";
import { CandidateService } from "src/app/services/candidate.service";
import { Candidate } from "src/app/models/CandidateData";

@Component({
  selector: "app-job-description",
  templateUrl: "./job-description.component.html",
  styleUrls: ["./job-description.component.scss"]
})
export class JobDescriptionComponent implements OnInit, OnDestroy {
  private articleId: string;
  candidate: Candidate;
  recruiterInfo: Recruiter;
  articleInfo: Articles;
  sub: Subscription[] = [];
  isLoading: boolean = false;
  isAuthenticated = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recruiterService: RecruiterService,
    private candidateService: CandidateService,
    private articleService: ArticleService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (this.authService.isSavedAuthData()) {
      this.isAuthenticated = true;
    }
    this.getBrowserAuthData();
    this.sub.push(
      this.route.paramMap.subscribe(params => {
        this.articleId = params.get("id");
        this.getPost(params.get("id"));
        this.getCompanyData(params.get("email"));
      })
    );
  }
  ngOnDestroy() {
    this.sub.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  private getPost(id: String) {
    this.sub.push(
      this.articleService.getArticleById(id).subscribe(article => {
        this.articleInfo = article;
      })
    );
  }
  private getCompanyData(email) {
    this.sub.push(
      this.recruiterService.getRecruiterAPI(email).subscribe(recruiter => {
        this.recruiterInfo = recruiter;
      })
    );
  }
  onApply() {
    const applyParams = {
      email: this.candidate.email
    };
    const applyForCandidateParams = {
      candidate_id: this.candidate._id,
      article_id: this.articleId
    };
    this.isLoading = true;
    this.sub.push(
      this.articleService.applyArticle(applyParams, this.articleId).subscribe(
        success => {
          this.isLoading = false;
          this.router.navigate(["apply-success"]);
        },
        error => {
          this.isLoading = false;
          alert("You've already applied for this job");
        }
      )
    );
    this.sub.push(
      this.articleService
        .applyInCandidateTimeline(applyForCandidateParams)
        .subscribe(success => {}, error => {})
    );
  }

  private getBrowserAuthData() {
    const authData = this.authService.getAuthData();
    if (!authData) {
      return;
    }
    if (authData.role === 1) {
      this.candidateService.getCandidate(authData.email).subscribe(
        candidate => {
          this.candidate = candidate;
        },
        error => {
          console.log(error);
        }
      );
    } else if (authData.role === 2) {
      this.recruiterService
        .getRecruiterAPI(authData.email)
        .subscribe(recruiter => {
          this.recruiterInfo = recruiter;
        });
    } else {
      // this.loginAsAdministrator();
    }
  }
}
