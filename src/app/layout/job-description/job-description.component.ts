import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RecruiterService } from "src/app/services/recruiter.service";
import { Subscription } from "rxjs";
import { ArticleService } from "src/app/services/article.service";
import { AuthService } from "src/app/services/auth.service";
import { Recruiter, Articles } from "src/app/models/RecruiterData";

@Component({
  selector: "app-job-description",
  templateUrl: "./job-description.component.html",
  styleUrls: ["./job-description.component.scss"]
})
export class JobDescriptionComponent implements OnInit, OnDestroy {
  private articleId: string;
  candidateEmai: string;
  recruiterEmail: string;
  recruiterInfo: Recruiter;
  articleInfo: Articles;
  sub: Subscription[] = [];
  isLoading: boolean = false;
  isAuthenticated = false;
  constructor(
    private route: ActivatedRoute,
    private recruiterService: RecruiterService,
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
      email: this.candidateEmai
    };
    this.isLoading = true;
    this.sub.push(
      this.articleService.applyArticle(applyParams, this.articleId).subscribe(
        success => {
          this.isLoading = false;
          console.log(success);
        },
        error => {
          this.isLoading = false;
          console.error(error);
        }
      )
    );
  }

  private getBrowserAuthData() {
    const authData = this.authService.getAuthData();
    if (!authData) {
      return;
    }
    if (authData.role === 1) {
      this.candidateEmai = authData.email;
    } else if (authData.role === 2) {
      this.recruiterEmail = authData.email;
    } else {
      // this.loginAsAdministrator();
    }
  }
}
