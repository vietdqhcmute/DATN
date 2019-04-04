import { Component } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { RecruiterComponent } from "../../recruiter.component";


@Component({
  selector: "app-recruiter-create-post",
  templateUrl: "./recruiter-create-post.component.html",
  styleUrls: ["./recruiter-create-post.component.scss"]
})
export class RecruiterCreatePostComponent extends RecruiterComponent {
  public Editor = ClassicEditor;
  recruitPostData = {
    title: "",
    tag: [],
    salary: "",
    description: "",
    created_at: new Date(),
    updated_at: new Date()
  };
  onCreatePost() {
    this.route.parent.params.subscribe(params => {
      let requestBody = {
        email_company: params.email,
        article: this.recruitPostData
      };
      this.articleService.saveArticle(requestBody);
    });
  }
}
