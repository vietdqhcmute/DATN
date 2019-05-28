import { Component, OnInit } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { RecruiterComponent } from "../../recruiter.component";
import { Tag } from "src/app/models/Tag";

@Component({
  selector: "app-recruiter-create-post",
  templateUrl: "./recruiter-create-post.component.html",
  styleUrls: ["./recruiter-create-post.component.scss"]
})
export class RecruiterCreatePostComponent extends RecruiterComponent
  implements OnInit {
  public Editor = ClassicEditor;
  private tagContent: string = "";
  private routeParams;
  private queryParams;
  private tags: Tag[] = [];
  private articleParams = {
    title: "",
    tags: [],
    salary: "",
    description: "",
    created_at: new Date(),
    updated_at: new Date()
  };
  ngOnInit() {
    this.getRouteParams();
    this.getQueryParams();
    if (this.queryParams.edit) {
      this.loadRecruitPostData(this.queryParams.id);
    }
  }
  onCreatePost() {
    let requestBody = {
      email_company: this.routeParams.email,
      article: this.articleParams
    };
    this.articleService.saveArticle(requestBody, this.routeParams.email);
  }
  onAddTag() {
    this.articleParams.tags.push(this.tagContent.trim());
    console.log(this.articleParams.tags);
    this.tagContent = "";
  }
  onUpdatePost() {}

  private loadRecruitPostData(id) {
    this.articleService.getArticleById(id).subscribe(data => {
      this.articleParams.title = data.title;
      this.articleParams.salary = data.salary;
      this.articleParams.description = data.description;
    });
  }
  private getRouteParams() {
    this.route.parent.params.subscribe(params => {
      this.routeParams = params;
    });
  }
  private getQueryParams() {
    this.route.parent.queryParams.subscribe(queryParams => {
      if (!queryParams) {
        return;
      }
      this.queryParams = queryParams;
    });
  }
}
