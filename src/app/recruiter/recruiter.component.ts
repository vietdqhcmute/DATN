import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { RecruiterService } from "../services/recruiter.service";
import { Recruiter } from "../models/RecruiterData";
import { ActivatedRoute } from "@angular/router";
import { first } from "rxjs/operators";
import { Title } from '@angular/platform-browser';

@Component({
  selector: "app-recruiter",
  templateUrl: "./recruiter.component.html",
  styleUrls: ["./recruiter.component.scss"]
})
export class RecruiterComponent implements OnInit {
  image_url =
    "https://cdn.itviec.com/employers/amanotes/logo/w170/8dM6PZybgr1ahE2Fr2pac4bm/amanotes-logo.png";
  paramsCompanyEmail: String;
  recruiterData: Recruiter;
  constructor(
    private authService: AuthService,
    private recruiterService: RecruiterService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.paramsCompanyEmail = params.get("email");
      this.loadRecruiterData(this.paramsCompanyEmail);
      this.titleService.setTitle("Profile of "+ this.paramsCompanyEmail);
    });
  }
  onLogOut() {
    // this.authService.logOut();
  }
  private loadRecruiterData(email) {
    this.recruiterService
      .getRecruiterByEmail(email)
      .pipe(first())
      .subscribe(recruiter => {
        this.recruiterData = <Recruiter>recruiter;
      });
  }
}
