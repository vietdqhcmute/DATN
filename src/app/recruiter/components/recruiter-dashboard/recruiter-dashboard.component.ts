import { Component, OnInit } from "@angular/core";
import { RecruiterComponent } from "../../recruiter.component";
import { Subscription } from "rxjs";
import { MatTableDataSource, MatDialogConfig } from "@angular/material";
import { DialogPreviewArticleComponent } from "src/app/partial/material-dialog/dialog-preview-article/dialog-preview-article.component";

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
  onPreview() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: "Angular For Beginners"
    };
    this.dialog.open(DialogPreviewArticleComponent, dialogConfig);
  }
  onAppliersList() {}
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
    this.articles.splice(index, 1);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
