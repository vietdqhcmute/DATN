import { Component, OnInit } from "@angular/core";
import { RecruiterService } from "../services/recruiter.service";
import { Recruiter } from "../models/RecruiterData";
import { ActivatedRoute, Router } from "@angular/router";
import { first } from "rxjs/operators";
import { Title } from "@angular/platform-browser";
import { Subscription, Subject } from "rxjs";
import { ArticleService } from "../services/article.service";
import { AuthService } from "../services/auth.service";
import { AlertService } from "../services/alert.service";
import { TagService } from "../services/tag.service";
import { ReviewService } from "../services/review.service";

@Component({
  selector: "app-recruiter",
  templateUrl: "./recruiter.component.html",
  styleUrls: ["./recruiter.component.scss"]
})
export class RecruiterComponent implements OnInit {
  protected recruiter: Recruiter;
  protected recruiterEmail: string;
  sub: Subscription;
  constructor(
    protected recruiterService: RecruiterService,
    protected articleService: ArticleService,
    protected route: ActivatedRoute,
    protected router: Router,
    protected titleService: Title,
    protected authService: AuthService,
    protected alertService: AlertService,
    protected tagService: TagService,
    protected reviewService: ReviewService
  ) {}

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      this.loadRecruiterData(params.get("email"));
    });
    this.getRecruiterEmail();
    this.alertService.setHideTopBar(true);
  }

  loadRecruiterData(email) {
    this.recruiterService.recruiterEmail.next(email);
    this.recruiterService
      .getRecruiter(email)
      .pipe(first())
      .subscribe(recruiter => {
        console.log(recruiter);
        this.recruiter = <Recruiter>recruiter;
      });
  }

  getRecruiterEmail() {
    this.recruiterService.getRecruiterEmailObservable().subscribe(email => {
      console.log(email);
      this.recruiterEmail = email;
    });
  }

  private onLogOut() {
    this.sub.unsubscribe();
    this.authService.logout();
  }
}
