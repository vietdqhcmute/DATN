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

@Component({
  selector: "app-recruiter",
  templateUrl: "./recruiter.component.html",
  styleUrls: ["./recruiter.component.scss"]
})
export class RecruiterComponent implements OnInit {
  image_url =
    "https://cdn.itviec.com/employers/amanotes/logo/w170/8dM6PZybgr1ahE2Fr2pac4bm/amanotes-logo.png";
  recruiterData: Recruiter;
  sub: Subscription;
  private companyName = new Subject<String>();
  protected companyEmail: String;
  constructor(
    protected recruiterService: RecruiterService,
    protected articleService: ArticleService,
    protected route: ActivatedRoute,
    protected router: Router,
    protected titleService: Title,
    protected authService: AuthService,
    protected alertService: AlertService
  ) {}

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      this.loadRecruiterData(params.get("email"));
      this.titleService.setTitle("Profile of " + params.get("email"));
    });
    this.alertService.setHideTopBar(true);
  }

  protected loadRecruiterData(email) {
    this.recruiterService
      .getRecruiterByEmail(email)
      .pipe(first())
      .subscribe(recruiter => {
        this.recruiterData = <Recruiter>recruiter;
        this.recruiterService.recruiter.next(<Recruiter>recruiter);
        this.companyEmail = this.recruiterData.email;
        // this.companyName.next(recruiter.company_email);
      });
  }
  protected getCompanyNameByEmail() {
    return this.companyName;
  }

  private onLogOut() {
    this.authService.logout();
  }
}
