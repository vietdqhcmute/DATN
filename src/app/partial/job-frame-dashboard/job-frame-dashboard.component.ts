import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ArticleService } from "src/app/services/article.service";
import { Router } from "@angular/router";
import { RecruiterService } from "src/app/services/recruiter.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-job-frame-dashboard",
  templateUrl: "./job-frame-dashboard.component.html",
  styleUrls: ["./job-frame-dashboard.component.scss"]
})
export class JobFrameDashboardComponent implements OnInit {
  @Input() jobDescription: any;
  @Input() email: string;
  @Output() deleteClick: EventEmitter<any> = new EventEmitter<any>();
  articleImageURL: string;
  isAuthenticated: boolean = false;
  constructor(
    private articleService: ArticleService,
    private router: Router,
    private recruiterService: RecruiterService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (this.authService.isSavedAuthData()) {
      this.isAuthenticated = true;
    }
    this.getArticleImageURL();
  }

  getArticleImageURL() {
    this.recruiterService.getRecruiterAPI(this.email).subscribe(recruiter => {
      this.articleImageURL = recruiter.image_url;
      console.log(recruiter.image_url);
    });
  }
  onUpdate() {
    this.router.navigate(["recruiter", this.email, "create-post"], {
      queryParams: { edit: true, id: this.jobDescription._id }
    });
  }
  onDelete() {
    this.articleService.deleteArticle(this.jobDescription._id).subscribe(
      response => {
        console.log("Delete success!");
        this.deleteClick.emit({
          itemId: this.jobDescription._id,
          email: this.email
        });
        //After delete on database, delete on array (using Array.splice to splice by ID)
        // Topbar do not get authData
        // Auth.guard to protect route which need to login
        // Modal yes no
        // Edit infomation of recruiter
        // remake starts
        //Show all articles by time in all-job
      },
      error => {
        // console.log(error);
      }
    );
  }
}
