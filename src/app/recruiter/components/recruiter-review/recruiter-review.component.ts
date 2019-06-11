import { Component, OnInit, OnDestroy } from "@angular/core";
import { RecruiterComponent } from "../../recruiter.component";

@Component({
  selector: "app-recruiter-review",
  templateUrl: "./recruiter-review.component.html",
  styleUrls: ["./recruiter-review.component.scss"]
})
export class RecruiterReviewComponent extends RecruiterComponent
  implements OnInit, OnDestroy {
  reviews = [];
  ngOnInit() {
    this.sub.push(
      this.route.parent.params.subscribe(params => {
        this.reviewService
          .getAllReviewByEmail(params.email)
          .subscribe(reviews => {
            this.reviews = reviews;
          });
      })
    );
  }
  ngOnDestroy(): void {
    this.sub.forEach(subscription => subscription.unsubscribe());
  }
}
