import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruiter-review-rating',
  templateUrl: './recruiter-review-rating.component.html',
  styleUrls: ['./recruiter-review-rating.component.scss']
})
export class RecruiterReviewRatingComponent implements OnInit {
  test_rating = 7.5;
  size: string;
  constructor() {
    this.size = this.getStars(this.test_rating);
  }

  ngOnInit() {
  }
  getStars(rating) {
    return (rating / 5 * 100) + '%';
  }
}
