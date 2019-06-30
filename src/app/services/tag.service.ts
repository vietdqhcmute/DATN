import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Tag } from "../models/Tag";

@Injectable({
  providedIn: "root"
})
export class TagService {
  domainName = environment.APIEndPoint;

  constructor(private http: HttpClient) {}

  getAllTagsAPI() {
    return this.http.get<Tag[]>(this.domainName + "tags");
  }
  getTagByContent(content: string) {
    return this.http.get<Tag>(this.domainName + "tag/" + content);
  }
  getTop10TagArticle() {
    return this.http.get<any>(this.domainName + "report/tag/article/top");
  }
  getTop10TagCandidate() {
    return this.http.get<any>(this.domainName + "report/tag/candidate/top");
  }
  createTag(content: string) {}

  addTag() {}

  deleteTag() {}
}
