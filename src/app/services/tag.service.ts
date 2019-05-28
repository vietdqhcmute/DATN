import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Tag } from "../models/Tag";

@Injectable({
  providedIn: "root"
})
export class TagService {
  tags: Tag[] = [];
  domainName = environment.APIEndPoint;

  constructor(private http: HttpClient) {}

  getAllTagsAPI() {
    this.http.get<Tag[]>(this.domainName + "tags").subscribe(tags => {
      this.tags = tags;
    });
  }
  createTag(content: string) {
  }

  addTag() {}

  deleteTag() {}
}
