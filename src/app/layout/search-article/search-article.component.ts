import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ArticleService } from "src/app/services/article.service";
import { Articles } from "src/app/models/RecruiterData";
import { Subscription } from "rxjs";

@Component({
  selector: "app-search-article",
  templateUrl: "./search-article.component.html",
  styleUrls: ["./search-article.component.scss"]
})
export class SearchArticleComponent implements OnInit {
  private articles: Articles[] = [];
  private searchText: string;
  constructor(
    protected route: ActivatedRoute,
    private router: Router,
    private ariticlesService: ArticleService
  ) {}

  ngOnInit() {
    this.articles = [];
    this.getQueryParams();
    this.searchArticles(this.searchText);
  }

  getQueryParams() {
    this.route.queryParams.subscribe(query => {
      this.searchText = query.key;
    });
  }

  searchArticles(searchText: string) {
    this.ariticlesService.searchArticle(searchText).subscribe(articles => {
      this.articles = [];
      this.articles = articles;
    });
  }

  onSearch() {
    this.router.navigate(["search"], { queryParams: { key: this.searchText } });
    this.getQueryParams();
    this.searchArticles(this.searchText);
  }
}
