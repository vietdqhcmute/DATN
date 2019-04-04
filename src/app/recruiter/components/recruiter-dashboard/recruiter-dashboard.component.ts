import { Component, OnInit, OnDestroy } from "@angular/core";
import { RecruiterComponent } from "../../recruiter.component";
import { Subscription } from "rxjs";

@Component({
  selector: "app-recruiter-dashboard",
  templateUrl: "./recruiter-dashboard.component.html",
  styleUrls: ["./recruiter-dashboard.component.scss"]
})
export class RecruiterDashboardComponent extends RecruiterComponent
  implements OnInit, OnDestroy {
  articles = [];
  company_email: String;
  ngOnInit() {
    this.sub = this.route.parent.params.subscribe(params => {
      this.articleService
        .getAllRecruiterPost(params.email)
        .subscribe(responseArticle => {
          this.company_email = params.email;
          this.articles = responseArticle;
        });
    });
  }
}
