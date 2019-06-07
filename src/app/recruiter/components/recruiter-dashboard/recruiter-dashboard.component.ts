import { Component, OnInit } from "@angular/core";
import { RecruiterComponent } from "../../recruiter.component";
import { Subscription } from "rxjs";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-recruiter-dashboard",
  templateUrl: "./recruiter-dashboard.component.html",
  styleUrls: ["./recruiter-dashboard.component.scss"]
})
export class RecruiterDashboardComponent extends RecruiterComponent
  implements OnInit {
  articles = [];
  company_email: String;
  displayedColumns: string[] = [
    "position",
    "title",
    "date",
    "applier",
    "preview",
    "update",
    "delete"
  ];
  private dataSource;

  ngOnInit() {
    this.sub.push(
      this.route.parent.params.subscribe(params => {
        this.articleService
          .getAllArticles(params.email)
          .subscribe(responseArticle => {
            this.company_email = params.email;
            this.articles = responseArticle;
            this.dataSource = new MatTableDataSource(this.articles);
          });
      })
    );
  }
  ngOnDestroy(): void {
    this.sub.forEach(subscription => subscription.unsubscribe());
  }
  onDelete(_id: string) {
    this.deleteArticleBackEnd(_id);
    this.deleteArticleFrontEnd(_id);
  }
  onUpdate(_id: string) {
    this.router.navigate(["recruiter", this.company_email, "create-post"], {
      queryParams: { edit: true, id: _id }
    });
  }
  deleteArticleBackEnd(_id: string) {
    this.articleService.deleteArticle(_id).subscribe(response => {
      console.log("Delete success!");
    });
  }
  deleteArticleFrontEnd(_id: string) {
    const index = this.articles.findIndex(index => index._id === _id);
    this.articles.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.articles);
  }

  deleteComponentClick(clickObj: any): void {
    const index = this.articles.findIndex(
      index => index._id === clickObj.itemId
    );
    console.log(clickObj.itemId);
    this.articles.splice(index, 1);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
