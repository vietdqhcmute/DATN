import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { RecruiterComponent } from "src/app/recruiter/recruiter.component";

@Component({
  selector: "app-company-description",
  templateUrl: "./company-description.component.html",
  styleUrls: ["./company-description.component.scss"]
})
export class CompanyDescriptionComponent extends RecruiterComponent
  implements OnInit, OnDestroy {
  imageURL_company =
    "https://cdn.itviec.com/photos/35827/processed_headline_photo/fpt-software-headline_photo.png?ojMRBGzhWEL7ri4CE7w3VgwU";
  sub: Subscription;
  company_email: String;
  reviews = [];
  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      this.loadRecruiterData(params.get("email"));
      this.getReviews(params.get("email"));
      this.company_email = params.get("email");
    });
  }

  getReviews(email){
    this.reviewService.getAllReviewByEmail(email).subscribe(data => {
      this.reviews = data.review_posts;
    });
  }
  onReview() {
    this.router.navigate(["review", this.company_email]);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
