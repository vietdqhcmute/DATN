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
  createTag(content: string) {
  }

  addTag() {}

  deleteTag() {}
}
