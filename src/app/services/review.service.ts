import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Review } from '../models/ReviewData';

@Injectable({
  providedIn: "root"
})
export class ReviewService {
  domainName = environment.APIEndPoint;

  constructor(private http: HttpClient) {}

  createReview(review: any) {
    return this.http.post<any>(this.domainName + "review/", review);
  }

  getAllReviewByEmail(email: String) {
    return this.http.get<Review[]>(this.domainName + "reviews/" + email);
  }
}
