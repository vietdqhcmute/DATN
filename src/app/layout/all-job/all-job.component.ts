import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Articles } from "src/app/models/RecruiterData";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { ArticleService } from "src/app/services/article.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-all-job",
  templateUrl: "./all-job.component.html",
  styleUrls: ["./all-job.component.scss"]
})
export class AllJobComponent implements OnInit {
  searchText: string;
  searchArticles: Articles[] = [];
  recentArticles: Articles[] = [];
  sub: Subscription;
  page: number = 0;
  per: number = 10;
  isLoading: boolean = false;
  isLoadingRecentArticles: boolean = false;
  constructor(
    private titleService: Title,
    private router: Router,
    private articleService: ArticleService
  ) {}
  ngOnInit() {
    this.titleService.setTitle("Searching for job");
    this.getRecentArticles(this.page, this.per);
  }

  onSearch(form: NgForm) {
    this.router.navigate(["/search"], {
      queryParams: { key: this.searchText }
    });
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
  onShowMoreJob() {
    this.isLoading = true;
    this.page++;
    this.getRecentArticles(this.page, this.per);
  }
}
