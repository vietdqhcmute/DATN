import { Component, OnInit } from "@angular/core";
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
  recruiterData: Recruiter;

  constructor(
    protected recruiterService: RecruiterService,
    protected route: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.loadRecruiterData(params.get("email"));
      this.titleService.setTitle("Profile of "+ params.get("email"));
    });
  }



  private onLogOut() {
    // this.authService.logOut();
  }

  private loadRecruiterData(email) {
    this.recruiterService
      .getRecruiterByEmail(email)
      .pipe(first())
      .subscribe(recruiter => {
        this.recruiterData = <Recruiter>recruiter;
        // console.log(this.recruiterData);
      });
  }
}
