import { Injectable } from "@angular/core";
import { RecruiterService } from "./recruiter.service";
import { Articles } from "../models/RecruiterData";

@Injectable({
  providedIn: "root"
})
export class ArticleService extends RecruiterService {
  searchArticle(searchText: string) {
    return this.http.get<Articles[]>(
      this.domainName + "search/articles?" + "key=" + searchText
    );
  }
  getAllArticles(email) {
    return this.http.get<any>(this.domainName + "article/articles/" + email);
  }

  getArticleById(id: String) {
    return this.http.get<any>(this.domainName + "article/" + id);
  }

  getAllAppliersByArticleId(id: string) {
    return this.http.get<String[]>(this.domainName + "article/applies/" + id);
  }

  getRecentArticles(){
    return this.http.get<Articles[]>(this.domainName + "article/articles/recent");
  }

  saveArticle(requestBody: any, email: string) {
    this.http.post(this.domainName + "article/", requestBody).subscribe(
      response => {
        this.router.navigate(["recruiter", email, "dashboard"]);
      },
      error => {
        this.alertService.error(error);
      }
    );
  }

  applyArticle(requestBody: any, id: string) {
    return this.http.put(this.domainName + "article/apply/" + id, requestBody);
  }

  updateArticle(requestBody: any) {}

  deleteArticle(id: String) {
    return this.http.delete(this.domainName + "article/" + id);
  }
}
