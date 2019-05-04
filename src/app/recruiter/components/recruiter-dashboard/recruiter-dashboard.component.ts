import { Component, OnInit } from "@angular/core";
import { RecruiterComponent } from "../../recruiter.component";
import { Subscription } from "rxjs";

@Component({
  selector: "app-recruiter-dashboard",
  templateUrl: "./recruiter-dashboard.component.html",
  styleUrls: ["./recruiter-dashboard.component.scss"]
})
export class RecruiterDashboardComponent extends RecruiterComponent
  implements OnInit {
  articles = [];
  company_email: String;
  ngOnInit() {
    this.sub = this.route.parent.params.subscribe(params => {
      this.articleService
        .getAllArticles(params.email)
        .subscribe(responseArticle => {
          this.company_email = params.email;
          this.articles = responseArticle;
        });
    });
  }
  deleteComponentClick(clickObj: any): void {
    const index = this.articles.findIndex(index=> index._id ===clickObj.itemId);
    console.log(clickObj.itemId);
    this.articles.splice(index, 1);
    console.log(this.articles);
  }
}
