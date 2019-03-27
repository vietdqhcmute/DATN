import { Component, OnInit } from "@angular/core";

interface ICompany {
  id: number;
  rating: string;
  evaluation: string;
}
@Component({
  selector: "app-company-review",
  templateUrl: "./company-review.component.html",
  styleUrls: ["./company-review.component.scss"]
})
export class CompanyReviewComponent implements OnInit {
  isShowCriticism = true;
  isShowShareCompany = true;
  ratingClicked: number;
  itemIdRatingClicked: string;
  items: ICompany[] = [
    { id: 0, rating: '', evaluation: "Đánh giá tổng quát" },
    { id: 1, rating: '', evaluation: "Lương thưởng và phúc lợi" },
    { id: 2, rating: '', evaluation: "Đào tạo và học hỏi " },
    { id: 3, rating: '', evaluation: "Sự quan tâm đến nhân viên" },
    { id: 4, rating: '', evaluation: "Văn hóa công ty" },
    { id: 5, rating: '', evaluation: "Văn phòng làm việc" }
  ];
  constructor() {}
  showCriticism() {
    this.isShowCriticism = this.isShowCriticism ? false : true;
  }
  showShareCompany() {
    this.isShowShareCompany = this.isShowShareCompany ? false : true;
  }
  ratingComponentClick(clickObj: any): void {
    console.log(clickObj);
    const item = this.items.find((i: any) => i.id === clickObj.itemId);
    if (!!item) {
      item.rating = clickObj.rating;
      this.ratingClicked = clickObj.rating;
      this.itemIdRatingClicked = item.evaluation;
    }
  }
  ngOnInit() {}
}
