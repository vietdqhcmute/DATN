import { Component, OnInit } from "@angular/core";
import { RecruiterComponent } from "src/app/recruiter/recruiter.component";
import { Review } from "src/app/models/ReviewData";
import { ContentObserver } from "@angular/cdk/observers";

// interface ICompany {
//   id: number;
//   rating: number;
//   title: string;
//   evaluation: string;
// }
@Component({
  selector: "app-company-review",
  templateUrl: "./company-review.component.html",
  styleUrls: ["./company-review.component.scss"]
})
export class CompanyReviewComponent extends RecruiterComponent
  implements OnInit {
  reviewData: Review = new Review();
  isShowCriticism = true;
  isShowShareCompany = true;
  ratingClicked: number;
  itemIdRatingClicked: string;
  items = [
    { id: 0, rating: 0, title: "", evaluation: "Đánh giá tổng quát" },
    { id: 1, rating: 0, title: "", evaluation: "Lương thưởng và phúc lợi" },
    { id: 2, rating: 0, title: "", evaluation: "Đào tạo và học hỏi " },
    { id: 3, rating: 0, title: "", evaluation: "Sự quan tâm đến nhân viên" },
    { id: 4, rating: 0, title: "", evaluation: "Văn hóa công ty" },
    { id: 5, rating: 0, title: "", evaluation: "Văn phòng làm việc" }
  ];
  showCriticism() {
    this.isShowCriticism = this.isShowCriticism ? false : true;
  }
  showShareCompany() {
    this.isShowShareCompany = this.isShowShareCompany ? false : true;
  }
  ratingComponentClick(clickObj: any): void {
    // console.log(clickObj);
    const item = this.items.find((i: any) => i.id === clickObj.itemId);
    if (!!item) {
      item.rating = clickObj.rating;
      item.title = clickObj.title;
      this.ratingClicked = clickObj.rating;
      this.itemIdRatingClicked = item.evaluation;
    }
  }

  onSubmit(): void {
    this.getRating();
    console.log(this.reviewData);
  }
  private getRating(): void {
    this.reviewData.rate_general = this.items[0].rating;
    this.reviewData.rate_salary = this.items[1].rating;
    this.reviewData.rate_training = this.items[2].rating;
    this.reviewData.rate_care = this.items[3].rating;
    this.reviewData.rate_culture = this.items[4].rating;
    this.reviewData.rate_infrastructure = this.items[5].rating;
  }
}
