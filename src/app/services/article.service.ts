import { Injectable } from "@angular/core";
import { RecruiterService } from "./recruiter.service";

@Injectable({
  providedIn: "root"
})
export class ArticleService extends RecruiterService {
  getAllArticles(email) {
    return this.http.get<any>(this.domainName + "articles/" + email);
  }

  getArticleById(id: String) {
    return this.http.get<any>(this.domainName + "article/" + id);
  }

  saveArticle(requestBody: any) {
    this.http
      .post(this.domainName + "article/", requestBody)
      .subscribe(response => {
        console.log(response);
      });
  }

  updateArticle(requestBody: any) {}

  deleteArticle(id: String) {
    return this.http.delete(this.domainName + "article/" + id);
  }
}