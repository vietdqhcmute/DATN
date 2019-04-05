import { Component, OnInit, Input } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ArticleService } from "src/app/services/article.service";
import { ContentObserver } from "@angular/cdk/observers";
import { Router } from "@angular/router";

@Component({
  selector: "app-job-frame-dashboard",
  templateUrl: "./job-frame-dashboard.component.html",
  styleUrls: ["./job-frame-dashboard.component.scss"]
})
export class JobFrameDashboardComponent implements OnInit {
  @Input() jobDescription: any;
  @Input() email: String;
  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit() {
  }
  onUpdate() {
    this.router.navigate(
      ["recruiter", this.email, "create-post", this.jobDescription._id],
      { queryParams: { edit: true } }
    );
  }
  onDelete() {
    this.articleService
      .deleteArticle(this.jobDescription._id)
      .subscribe(response => {});
  }
}
