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
    return this.http.get<Articles[]>(
      this.domainName + "article/articles/" + email
    );
  }

  getArticleById(id: String) {
    return this.http.get<Articles>(this.domainName + "article/" + id);
  }

  getAllAppliersByArticleId(id: string) {
    return this.http.get<String[]>(this.domainName + "article/applies/" + id);
  }

  getRecentArticles() {
    return this.http.get<Articles[]>(
      this.domainName + "article/articles/recent"
    );
  }

  getArticlesHaveBeenApplied(candidate_id: string) {
    return this.http.get<Articles[]>(
      this.domainName + "candidate/applies/" + candidate_id
    );
  }
  getTags(article_id: string) {
    return this.http.get<any>(this.domainName + "article/tags/" + article_id);
  }
  saveArticle(requestBody: any, email: string) {
    return this.http.post<Articles>(this.domainName + "article/", requestBody);
  }

  applyArticle(requestBody: any, id: string) {
    return this.http.put(this.domainName + "article/apply/" + id, requestBody);
  }

  applyInCandidateTimeline(requestBody: any) {
    return this.http.put(this.domainName + "candidate/apply", requestBody);
  }

  updateArticle(requestBody: any, id: string) {
    return this.http.put(this.domainName + "article/" + id, requestBody);
  }

  deleteArticle(id: String) {
    return this.http.delete(this.domainName + "article/" + id);
  }
  createReportTag(params: any) {
    return this.http.put(this.domainName + "report/tag/article", params);
  }
}
