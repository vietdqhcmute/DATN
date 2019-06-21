import { Component, OnInit, OnDestroy } from "@angular/core";
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
  implements OnInit, OnDestroy {
  public Editor = ClassicEditor;
  private routeParams;
  private queryParams;
  private tags: Tag[] = [];
  private tagList: string[] = [];
  private tagContent = new FormControl();
  private filteredOptions;
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
    this.tagContent.valueChanges.pipe(startWith("")).subscribe(value => {
      this.filteredOptions = this._filter(value);
    });
    if (this.queryParams.edit) {
      this.getArticle(this.queryParams.id);
    }
  }
  ngOnDestroy(): void {
    this.sub.forEach(subscription => subscription.unsubscribe());
  }

  onCreatePost() {
    // let requestBody = {
    //   email_company: this.routeParams.email,
    //   article: this.articleParams
    // };
    // this.articleService
    //   .saveArticle(requestBody, this.routeParams.email)
    //   .subscribe(
    //     response => {
    //       this.navigateDashboard();
    //     },
    //     error => {
    //       this.alertService.error(error);
    //     }
    //   );
  }
  onUpdatePost() {
    // console.log(this.articleParams);
    // this.articleService.updateArticle(this.articleParams, this.queryParams.id);
    this.articleService
      .updateArticle(this.articleParams, this.queryParams.id)
      .subscribe(
        success => {
          this.navigateDashboard();
        },
        error => {
          console.error(error);
        }
      );
  }
  onAddTag(form: NgForm) {
    if (this.tagContent.value === null) {
      return;
    }
    this.articleParams.tags.push(this.tagContent.value.trim());
    this.tagContent.reset();
  }
  onAutoTag() {
    if (!this.tagFilter()) {
      return;
    }
    this.tagFilter().forEach(tag => {
      this.articleParams.tags.push(tag);
    });
  }
  tagFilter(): Array<string> {
    if (!this.splitTitle()) {
      return;
    }
    let tags = this.splitTitle();
    for (let i = 0; i < tags.length; i++) {
      if (!this.tagList.includes(tags[i])) {
        tags.splice(i, 1);
        i--;
      }
    }
    return tags;
  }
  splitTitle(): Array<string> {
    if (this.articleParams.title === "") {
      return;
    }
    const tagsInTitle = this.articleParams.title
      .toLowerCase()
      .replace(/[()]/g, "")
      .split(" ");
    return tagsInTitle;
  }

  _filter(value: string) {
    if (!value) {
      return;
    }
    const filterValue = value.toLowerCase();
    return this.tagList.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  getArticle(id) {
    this.sub.push(
      this.articleService.getArticleById(id).subscribe(data => {
        this.articleParams.title = data.title;
        this.articleParams.salary = data.salary;
        this.articleParams.description = data.description;
      })
    );
  }
  getRouteParams() {
    this.sub.push(
      this.route.parent.params.subscribe(params => {
        this.routeParams = params;
      })
    );
  }
  getQueryParams() {
    this.sub.push(
      this.route.parent.queryParams.subscribe(queryParams => {
        if (!queryParams) {
          return;
        }
        this.queryParams = queryParams;
      })
    );
  }
  getAllTags() {
    this.sub.push(
      this.tagService.getAllTagsAPI().subscribe(tags => {
        this.tags = tags;
        tags.forEach(element => this.tagList.push(element.content));
      })
    );
  }

  navigateDashboard() {
    this.router.navigate(["recruiter", this.routeParams.email, "dashboard"]);
  }
}
