import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RecruiterService } from "src/app/services/recruiter.service";
import { Subscription } from "rxjs";
import { ArticleService } from "src/app/services/article.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-job-description",
  templateUrl: "./job-description.component.html",
  styleUrls: ["./job-description.component.scss"]
})
export class JobDescriptionComponent implements OnInit {
  private articleId: string;
  private candidateEmai: string;
  private recruiterEmail: string;
  private recruiterInfo = {
    _id: "",
    image_url: "",
    company_name: "",
    addr: "",
    type: "",
    employees: "",
    date_at_work: "",
    email: "",
    slogan: ""
  };
  private articleInfo = {
    _id: "",
    title: "",
    salary: "",
    description: "",
    created_at: ""
  };
  sub: Subscription;
  constructor(
    private route: ActivatedRoute,
    private recruiterService: RecruiterService,
    private articleService: ArticleService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.getBrowserAuthData();
    this.route.paramMap.subscribe(params => {
      this.articleId = params.get("id");
      this.getPost(params.get("id"));
      this.getCompanyData(params.get("email"));
    });
  }

  private getPost(id: String) {
    this.sub = this.articleService.getArticleById(id).subscribe(jobData => {
      this.articleInfo._id = jobData._id;
      this.articleInfo.title = jobData.title;
      this.articleInfo.salary = jobData.salary;
      this.articleInfo.created_at = jobData.created_at;
      this.articleInfo.description = jobData.description;
    });
  }
  private getCompanyData(email) {
    this.sub = this.recruiterService
      .getRecruiterAPI(email)
      .subscribe(response => {
        this.recruiterInfo._id = response._id;
        this.recruiterInfo.image_url = response.image_url;
        this.recruiterInfo.company_name = response.company_name;
        this.recruiterInfo.addr = response.addr;
        this.recruiterInfo.employees = response.employees;
        this.recruiterInfo.date_at_work = response.date_at_work;
        this.recruiterInfo.email = response.email;
        this.recruiterInfo.slogan = response.slogan;
      });
  }
  onApply() {
    const applyParams = {
      email: this.candidateEmai
    };
    this.articleService.applyArticle(applyParams, this.articleId).subscribe(
      success => {
        console.log(success);
      },
      error => {
        console.error(error);
      }
    );
  }

  private getBrowserAuthData() {
    const authData = this.authService.getAuthData();
    if (!authData) {
      return;
    }
    if (authData.role === 1) {
      this.candidateEmai = authData.email;
    } else if (authData.role === 2) {
      this.recruiterEmail = authData.email;
    } else {
      // this.loginAsAdministrator();
    }
  }
}
