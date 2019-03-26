import { Component, OnInit } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: "app-recruiter-create-post",
  templateUrl: "./recruiter-create-post.component.html",
  styleUrls: ["./recruiter-create-post.component.scss"]
})
export class RecruiterCreatePostComponent implements OnInit {
  public Editor = ClassicEditor;
  name:String;
  constructor() {}

  ngOnInit() {}

  onCreatePost() {}
}
