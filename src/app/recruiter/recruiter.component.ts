import { Component, OnInit, OnDestroy } from "@angular/core";
import { RecruiterService } from "../services/recruiter.service";
import { Recruiter } from "../models/RecruiterData";
import { ActivatedRoute } from "@angular/router";
import { first } from "rxjs/operators";
import { Title } from "@angular/platform-browser";
import { Subscription } from "rxjs";
import { ArticleService } from '../services/article.service';

@Component({
  selector: "app-recruiter",
  templateUrl: "./recruiter.component.html",
  styleUrls: ["./recruiter.component.scss"]
})
export class RecruiterComponent implements OnInit, OnDestroy {
  image_url =
    "https://cdn.itviec.com/employers/amanotes/logo/w170/8dM6PZybgr1ahE2Fr2pac4bm/amanotes-logo.png";
  recruiterData: Recruiter;
  sub: Subscription;
  constructor(
    protected recruiterService: RecruiterService,
    protected articleService: ArticleService,
    protected route: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      this.loadRecruiterData(params.get("email"));
      this.titleService.setTitle("Profile of " + params.get("email"));
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private onLogOut() {
    // this.authService.logOut();
  }

  private loadRecruiterData(email) {
    this.sub = this.recruiterService
      .getRecruiterByEmail(email)
      .pipe(first())
      .subscribe(recruiter => {
        this.recruiterData = <Recruiter>recruiter;
      });
  }
}
