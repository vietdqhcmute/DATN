import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { Subscription } from "rxjs";
import { RecruiterComponent } from "src/app/recruiter/recruiter.component";

@Component({
  selector: "app-company-description",
  templateUrl: "./company-description.component.html",
  styleUrls: ["./company-description.component.scss"]
})
export class CompanyDescriptionComponent extends RecruiterComponent
  implements OnInit, OnDestroy, AfterViewInit {
  imageURL_company =
    "https://cdn.itviec.com/photos/35827/processed_headline_photo/fpt-software-headline_photo.png?ojMRBGzhWEL7ri4CE7w3VgwU";
  company_email: String;
  reviews = [];
  ngOnInit() {
    this.sub.push(
      this.route.paramMap.subscribe(params => {
        this.company_email = params.get("email");
        this.loadRecruiterData(params.get("email"));
        this.getReviews(params.get("email"));
      })
    );
  }
  ngAfterViewInit(): void {
    this.alertService.setHideTopBar(false);
  }
  ngOnDestroy(): void {
    this.sub.forEach(subscription => subscription.unsubscribe());
  }
  onReview() {
    this.router.navigate(["review", this.company_email]);
  }
  getReviews(email) {
    this.sub.push(
      this.reviewService.getAllReviewByEmail(email).subscribe(data => {
        this.reviews = data;
      })
    );
  }
}
