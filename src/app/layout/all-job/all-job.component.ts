import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Articles } from "src/app/models/RecruiterData";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { ArticleService } from "src/app/services/article.service";

@Component({
  selector: "app-all-job",
  templateUrl: "./all-job.component.html",
  styleUrls: ["./all-job.component.scss"]
})
export class AllJobComponent implements OnInit {
  searchText: string;
  searchArticles: Articles[] = [];
  sub: Subscription;
  recentArticles: Articles[];
  constructor(
    private titleService: Title,
    private router: Router,
    private articleService: ArticleService
  ) {}
  ngOnInit() {
    this.titleService.setTitle("Searching for job");
    this.getRecentArticles();
  }

  onSearch() {
    this.router.navigate(["/search"], {
      queryParams: { key: this.searchText }
    });
  }

  getRecentArticles() {
    this.articleService.getRecentArticles().subscribe(articles => {
      this.recentArticles = articles;
    });
  }
}
