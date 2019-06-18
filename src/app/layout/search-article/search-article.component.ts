import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ArticleService } from "src/app/services/article.service";
import { Articles } from "src/app/models/RecruiterData";
import { Subscription } from "rxjs";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-search-article",
  templateUrl: "./search-article.component.html",
  styleUrls: ["./search-article.component.scss"]
})
export class SearchArticleComponent implements OnInit, OnDestroy {
  articles: Articles[] = [];
  searchText: string;
  sub: Subscription[] = [];

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
  ngOnDestroy(): void {
    this.sub.forEach(subscription => subscription.unsubscribe());
  }

  getQueryParams() {
    this.sub.push(
      this.route.queryParams.subscribe(query => {
        this.searchText = query.key;
      })
    );
  }

  searchArticles(searchText: string) {
    this.sub.push(
      this.ariticlesService.searchArticle(searchText).subscribe(
        articles => {
          this.articles = [];
          this.articles = <Articles[]>articles.results;
        },
        error => {
          this.articles = [];
        }
      )
    );
  }

  onSearch(form: NgForm) {
    this.searchArticles(this.searchText);
    this.router.navigate(["search"], { queryParams: { key: this.searchText } });
  }
}
