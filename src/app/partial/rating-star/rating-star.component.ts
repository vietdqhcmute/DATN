import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";

@Component({
  selector: "app-rating-star",
  templateUrl: "./rating-star.component.html",
  styleUrls: ["./rating-star.component.scss"]
})
export class RatingStarComponent implements OnInit {
  @Input() rating: number;
  @Input() title: string;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  inputName: string;
  constructor() {}

  ngOnInit() {
    this.inputName = this.itemId + "_rating";
  }
  onClick(rating: number, title: string): void {
    this.rating = rating;
    this.title = title;
    console.log(this.rating);
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating,
      title: title
    });
  }
}
