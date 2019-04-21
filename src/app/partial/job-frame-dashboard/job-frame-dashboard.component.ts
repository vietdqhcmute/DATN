import { Component, OnInit, Input } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ArticleService } from "src/app/services/article.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-job-frame-dashboard",
  templateUrl: "./job-frame-dashboard.component.html",
  styleUrls: ["./job-frame-dashboard.component.scss"]
})
export class JobFrameDashboardComponent implements OnInit {
  @Input() jobDescription: any;
  @Input() email: String;
  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit() {
  }
  onUpdate() {
    this.router.navigate(
      ["recruiter", this.email, "create-post"],
      { queryParams: { edit: true , id: this.jobDescription._id} }
    );
  }
  onDelete() {
    this.articleService
      .deleteArticle(this.jobDescription._id)
      .subscribe(response => {
        console.log("Delete success!");
        //After delete on database, delete on array (using Array.splice to splice by ID)
        // Topbar do not get authData
        // Auth.guard to protect route which need to login
        // Modal yes no
        // Edit infomation of recruiter
        // remake starts
        //Show all articles by time in all-job
      }, error=>{
        // console.log(error);
      });
  }
}
