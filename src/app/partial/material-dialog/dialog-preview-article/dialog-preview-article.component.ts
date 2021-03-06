import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-dialog-preview-article",
  templateUrl: "./dialog-preview-article.component.html",
  styleUrls: ["./dialog-preview-article.component.scss"]
})
export class DialogPreviewArticleComponent implements OnInit {
  article: string;

  constructor(
    private dialogRef: MatDialogRef<DialogPreviewArticleComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.article = data.article;
  }

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }
}
