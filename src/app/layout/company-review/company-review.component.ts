import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-company-review",
  templateUrl: "./company-review.component.html",
  styleUrls: ["./company-review.component.scss"]
})
export class CompanyReviewComponent implements OnInit {
  isDivVisible = true;
  constructor() {}
  show() {
    this.isDivVisible = this.isDivVisible? false : true;
  }
  ngOnInit() {}
}
