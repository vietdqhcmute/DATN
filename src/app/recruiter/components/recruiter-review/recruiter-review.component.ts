import { Component, OnInit } from "@angular/core";
import { RecruiterComponent } from "../../recruiter.component";
import { RecruiterService } from "src/app/services/recruiter.service";
import { ArticleService } from "src/app/services/article.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { ReviewService } from "src/app/services/review.service";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: "app-recruiter-review",
  templateUrl: "./recruiter-review.component.html",
  styleUrls: ["./recruiter-review.component.scss"]
})
export class RecruiterReviewComponent extends RecruiterComponent
  implements OnInit {
  reviews = [];
  constructor(
    protected recruiterService: RecruiterService,
    protected articleService: ArticleService,
    protected route: ActivatedRoute,
    protected router: Router,
    protected titleService: Title,
    protected authService: AuthService,
    private reviewService: ReviewService
  ) {
    super(recruiterService, articleService, route, router, titleService, authService);
  }
  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.reviewService.getAllReviewByEmail(params.email).subscribe(data => {
        this.reviews = data.review_posts;
        this.getCompanyNameByEmail().subscribe(res => {
          console.log(res);
        });
      });
    });
  }
}
