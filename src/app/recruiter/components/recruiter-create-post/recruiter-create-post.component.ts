import { Component, OnInit } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { RecruitPost } from "src/app/models/RecruiterData";
import { ActivatedRoute } from "@angular/router";
import { RecruiterComponent } from "../../recruiter.component";
import { AuthService } from "src/app/services/auth.service";
import { RecruiterService } from "src/app/services/recruiter.service";
import { Title } from "@angular/platform-browser";

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
        email: params.email,
        article: this.recruitPostData
      };
      this.recruiterService.saveRecruitPost(requestBody);
    });
  }
}
