import { Component, OnInit } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { RecruiterComponent } from "../../recruiter.component";
import { Tag } from "src/app/models/Tag";
import { FormControl, NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { startWith, map } from "rxjs/operators";

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
  private tags: Tag[] = [];
  private tagsString: string[] = [];
  private tagContent = new FormControl();
  private filteredOptions: Observable<string[]>;
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
    this.getAllTags();
    // this.filteredOptions = this.tagContent.valueChanges.subscribe(value=>this._filter(value));
    this.filteredOptions = this.tagContent.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value))
    );
    if (this.queryParams.edit) {
      this.loadRecruitPostData(this.queryParams.id);
    }
  }

  _filter(value: string): string[] {
    console.log(value);
    const filterValue = value.toLowerCase();
    return this.tagsString.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  onCreatePost() {
    let requestBody = {
      email_company: this.routeParams.email,
      article: this.articleParams
    };
    this.articleService.saveArticle(requestBody, this.routeParams.email);
  }
  onAddTag(form: NgForm) {
    if (this.tagContent.value === null) {
      return;
    }
    this.articleParams.tags.push(this.tagContent.value.trim());
    this.tagContent.reset();
  }
  onUpdatePost() {}

  loadRecruitPostData(id) {
    this.articleService.getArticleById(id).subscribe(data => {
      this.articleParams.title = data.title;
      this.articleParams.salary = data.salary;
      this.articleParams.description = data.description;
    });
  }
  getRouteParams() {
    this.route.parent.params.subscribe(params => {
      this.routeParams = params;
    });
  }
  getQueryParams() {
    this.route.parent.queryParams.subscribe(queryParams => {
      if (!queryParams) {
        return;
      }
      this.queryParams = queryParams;
    });
  }
  getAllTags() {
    this.tagService.getAllTagsAPI().subscribe(tags => {
      this.tags = tags;
      tags.forEach(element => this.tagsString.push(element.content));
    });
  }
}
