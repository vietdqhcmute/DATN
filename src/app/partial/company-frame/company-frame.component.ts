import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { Recruiter, Articles } from "src/app/models/RecruiterData";
import { RecruiterComponent } from "src/app/recruiter/recruiter.component";

@Component({
  selector: "app-company-frame",
  templateUrl: "./company-frame.component.html",
  styleUrls: ["./company-frame.component.scss"]
})
export class CompanyFrameComponent extends RecruiterComponent
  implements OnInit, AfterViewInit {
  @Input() company: Recruiter;
  articles: Articles[] = [];

  ngOnInit() {
    this.getArticles(this.company.email);
  }
  ngAfterViewInit(): void {
    this.alertService.setHideTopBar(false);
  }

  getArticles(email) {
    this.articleService.getAllArticles(email).subscribe(articles => {
      this.articles = articles;
    });
  }
}
