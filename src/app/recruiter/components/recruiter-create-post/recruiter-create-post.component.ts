import { Component, OnInit } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { RecruitPost } from 'src/app/models/RecruiterData';

@Component({
  selector: "app-recruiter-create-post",
  templateUrl: "./recruiter-create-post.component.html",
  styleUrls: ["./recruiter-create-post.component.scss"]
})
export class RecruiterCreatePostComponent implements OnInit {
  public Editor = ClassicEditor;
  name:String;
  recruitPostData={
    title:"",
    tag:[],
    salary:"",
    description:"",
    created_at:new Date(),
    updated_at:new Date()
  };
  constructor() {}

  ngOnInit() {
  }

  onCreatePost() {}
}
