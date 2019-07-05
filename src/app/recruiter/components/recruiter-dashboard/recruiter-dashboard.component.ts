import { Component, OnInit } from "@angular/core";
import { RecruiterComponent } from "../../recruiter.component";
import { Subscription } from "rxjs";
import { MatTableDataSource, MatDialogConfig } from "@angular/material";
import { DialogPreviewArticleComponent } from "src/app/partial/material-dialog/dialog-preview-article/dialog-preview-article.component";
import { Articles } from "src/app/models/RecruiterData";
import { DialogApplierListComponent } from "src/app/partial/material-dialog/dialog-applier-list/dialog-applier-list.component";
import { DialogConfirmationComponent } from "src/app/partial/material-dialog/dialog-confirmation/dialog-confirmation.component";

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
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      message: "Do you want to delete?"
    };
    const dialogRef = this.dialog.open(
      DialogConfirmationComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteArticleBackEnd(_id);
        this.deleteArticleFrontEnd(_id);
      }
    });
  }
  onUpdate(_id: string) {
    this.router.navigate(["recruiter", this.company_email, "create-post"], {
      queryParams: { edit: true, id: _id }
    });
  }
  onPreview(article: Articles) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      article: article
    };
    this.dialog.open(DialogPreviewArticleComponent, dialogConfig);
  }
  onAppliersList(_id: string, appliers: string[]) {
    if (appliers.length === 0) {
      alert("Nobody apply for this job yet!");
      return;
    }
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      _id: _id,
      appliers: appliers
    };
    this.dialog.open(DialogApplierListComponent, dialogConfig);
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
    this.articles.splice(index, 1);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
