import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Router } from "@angular/router";
import { ArticleService } from "src/app/services/article.service";
import { CandidateService } from "src/app/services/candidate.service";
import { Candidate } from "src/app/models/CandidateData";

@Component({
  selector: "app-dialog-applier-list",
  templateUrl: "./dialog-applier-list.component.html",
  styleUrls: ["./dialog-applier-list.component.scss"]
})
export class DialogApplierListComponent implements OnInit {
  _id: string;
  appliers: [string];
  private candidates: Candidate[] = [];
  constructor(
    private router: Router,
    private articleService: ArticleService,
    private candidateService: CandidateService,
    private dialogRef: MatDialogRef<DialogApplierListComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this._id = data._id;
    this.appliers = data.appliers;
  }

  ngOnInit() {
    if (this.appliers) {
      this.onApplyList();
    }
  }

  close() {
    this.dialogRef.close();
  }
  onApplyList() {
    this.articleService
      .getAllAppliersByArticleId(this._id)
      .subscribe(appliers => {
        appliers.forEach(email => {
          this.candidateService.getCandidateAPI(email).subscribe(candidate => {
            this.candidates.push(<Candidate>candidate);
          });
        });
      });
  }
  onViewApplierCV(email: string) {
    this.router.navigate(["profile", email, "create-cv"], {
      queryParams: { edit: false }
    });
  }
}
