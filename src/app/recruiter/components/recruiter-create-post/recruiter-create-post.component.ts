import { Component, OnInit } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { RecruiterComponent } from "../../recruiter.component";

@Component({
  selector: "app-recruiter-create-post",
  templateUrl: "./recruiter-create-post.component.html",
  styleUrls: ["./recruiter-create-post.component.scss"]
})
export class RecruiterCreatePostComponent extends RecruiterComponent
  implements OnInit {
  public Editor = ClassicEditor;
  private routeParams;
  private queryParams;
  recruitPostData = {
    title: "",
    tag: [],
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
        article: this.recruitPostData
      };
      this.articleService.saveArticle(requestBody, this.routeParams.email);
  }
  onUpdatePost(){

  }
  private loadRecruitPostData(id) {
    this.articleService.getArticleById(id).subscribe(data=>{
      this.recruitPostData.title = data.title;
      this.recruitPostData.salary = data.salary;
      this.recruitPostData.description = data.description;
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
