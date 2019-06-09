import { Component, OnInit, Input } from "@angular/core";
import { Review } from "src/app/models/ReviewData";

@Component({
  selector: "app-recruiter-review-post",
  templateUrl: "./recruiter-review-post.component.html",
  styleUrls: ["./recruiter-review-post.component.scss"]
})
export class RecruiterReviewPostComponent implements OnInit {
  @Input() review: Review;
  size: string;

  constructor() {
  }

  ngOnInit() {
    this.size = this.getStars(this.review.rate_general);
  }
  getStars(rating) {
    return (rating / 5) * 100 + "%";
  }
}
