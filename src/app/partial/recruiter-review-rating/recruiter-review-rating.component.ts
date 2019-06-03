import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruiter-review-rating',
  templateUrl: './recruiter-review-rating.component.html',
  styleUrls: ['./recruiter-review-rating.component.scss']
})
export class RecruiterReviewRatingComponent implements OnInit {
  rating = 3.5;
  size: string;
  getStars(rating) {
    // Get the value
    var val = parseFloat(rating);
    // Turn value into number/100
    var size = val / 5 * 100;
    console.log(size);
    return size + '%';
  }
  constructor() {
    this.size = this.getStars(this.rating);
    console.log(this.size);
  }

  ngOnInit() {
  }

}
