import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/models/ReviewData';

@Component({
  selector: 'app-recruiter-review-rating',
  templateUrl: './recruiter-review-rating.component.html',
  styleUrls: ['./recruiter-review-rating.component.scss']
})
export class RecruiterReviewRatingComponent implements OnInit {
  @Input() rating;
  size: string;
  constructor() {
  }

  ngOnInit() {
    this.size = this.getStars(this.rating);
  }
  getStars(rating) {
    return (rating / 5 * 100) + '%';
  }
}
