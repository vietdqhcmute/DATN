import { Component, OnInit, AfterViewChecked } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Articles } from "src/app/models/RecruiterData";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { ArticleService } from "src/app/services/article.service";
import { NgForm } from "@angular/forms";
import { AlertService } from "src/app/services/alert.service";
import { AuthService } from "src/app/services/auth.service";
import { CandidateService } from "src/app/services/candidate.service";
import { Candidate } from "src/app/models/CandidateData";

@Component({
  selector: "app-all-job",
  templateUrl: "./all-job.component.html",
  styleUrls: ["./all-job.component.scss"]
})
export class AllJobComponent implements OnInit, AfterViewChecked {
  searchText: string;
  recentArticles: Articles[] = [];
  recommendedArticles: Articles[] = [];
  sub: Subscription;
  page: number = 0;
  per: number = 10;
  isLoading: boolean = false;
  isLoadingRecentArticles: boolean = false;
  isRecommended: boolean = false;
  candidate: Candidate;
  constructor(
    private titleService: Title,
    private router: Router,
    private articleService: ArticleService,
    private alertService: AlertService,
    private authService: AuthService,
    private candidateService: CandidateService
  ) {}
  ngOnInit() {
    this.titleService.setTitle("Searching for job");
    this.getRecommendedArticles(this.page, this.per);
    this.getRecentArticles(this.page, this.per);
  }
  ngAfterViewChecked(): void {
    this.alertService.setHideTopBar(false);
  }

  onSearch(form: NgForm) {
    this.router.navigate(["/search"], {
      queryParams: { key: this.searchText }
    });
  }
  onShowMoreJob() {
    this.isLoading = true;
    this.page++;
    this.getRecentArticles(this.page, this.per);
  }

  onChangeSlideToggle() {
    console.log(this.recommendedArticles);
  }

  getRecentArticles(page: number, per: number) {
    this.isLoadingRecentArticles = true;
    this.articleService.getRecentArticles(page, per).subscribe(articles => {
      this.isLoading = false;
      articles.forEach(
        article => {
          this.recentArticles.push(article);
          this.isLoadingRecentArticles = false;
        },
        error => {
          this.isLoadingRecentArticles = false;
          this.isLoading = false;
        }
      );
    });
  }

  getRecommendedArticles(page: number, per: number) {
    const auth = this.getAuthBrowser();
    if (!auth){
      return
    }
    this.candidateService.getTagsByEmail(auth.email).subscribe(response => {
      let tagParams: string = "";
      response.tags.forEach(tag => {
        tagParams += tag + " ";
      });
      this.articleService.searchArticle(tagParams).subscribe(response => {
        console.log(response)
        this.recommendedArticles = response.results;
      });
    });
  }
  getAuthBrowser() {
    return this.authService.getAuthData();
  }
}
