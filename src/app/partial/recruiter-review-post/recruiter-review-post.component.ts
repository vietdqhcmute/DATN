import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-recruiter-review-post",
  templateUrl: "./recruiter-review-post.component.html",
  styleUrls: ["./recruiter-review-post.component.scss"]
})
export class RecruiterReviewPostComponent implements OnInit {
  @Input() review: any;
  created = "March 3 2019";
  like = "Working environment is very friendly";
  not_like = "I was looked down on when I was here!";
  rating = 3.5;
  constructor() {}

  ngOnInit() {
  }
}
