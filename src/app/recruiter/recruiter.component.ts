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
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-recruiter",
  templateUrl: "./recruiter.component.html",
  styleUrls: ["./recruiter.component.scss"]
})
export class RecruiterComponent implements OnInit {
  protected recruiter: Recruiter;
  protected recruiterEmail: string;
  sub: Subscription[] = [];
  constructor(
    protected recruiterService: RecruiterService,
    protected articleService: ArticleService,
    protected route: ActivatedRoute,
    protected router: Router,
    protected titleService: Title,
    protected authService: AuthService,
    protected alertService: AlertService,
    protected tagService: TagService,
    protected reviewService: ReviewService,
    protected dialog: MatDialog
  ) {}

  ngOnInit() {
    this.alertService.setHideTopBar(true);
    this.sub.push(
      this.route.paramMap.subscribe(params => {
        this.recruiterEmail = params.get("email");
        // this.getRecruiterEmail();
        this.loadRecruiterData(params.get("email"));
        // this.setRecruiterEmail(params.get("email"))
      })
    );
  }

  onLogOut() {
    this.sub.forEach(subscription => subscription.unsubscribe());
    this.authService.logout();
  }

  loadRecruiterData(email) {
    this.sub.push(
      this.recruiterService
        .getRecruiter(email)
        .pipe(first())
        .subscribe(recruiter => {
          console.log(recruiter);
          this.titleService.setTitle(recruiter.company_name);
          this.recruiter = <Recruiter>recruiter;
        })
    );
  }

  getRecruiterEmail() {
    this.sub.push(
      this.recruiterService.getRecruiterEmailObservable().subscribe(email => {
        this.recruiterEmail = email;
      })
    );
  }

  setRecruiterEmail(email) {
    this.recruiterService.setRecruiterEmailObservable(email);
  }
}
