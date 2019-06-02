import { Component, OnInit } from "@angular/core";
import { RecruiterComponent } from "../../recruiter.component";

@Component({
  selector: "app-recruiter-review",
  templateUrl: "./recruiter-review.component.html",
  styleUrls: ["./recruiter-review.component.scss"]
})
export class RecruiterReviewComponent extends RecruiterComponent
  implements OnInit {
  reviews = [];
  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.reviewService
        .getAllReviewByEmail(params.email)
        .subscribe(reviews => {
          console.log(reviews);
          this.reviews = reviews;
        });
    });
  }
}
