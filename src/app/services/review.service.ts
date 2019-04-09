import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ReviewService {
  domainName = environment.APIEndPoint;

  constructor(private http: HttpClient) {}

  createReviewPost(email: String, reviewPost: any) {
    return this.http.put<any>(
      this.domainName + "push/review/" + email,
      reviewPost
    );
  }

  getAllReviewByEmail(email: String) {
    return this.http.get<any>(this.domainName + "reviews/"+email);
  }
}
