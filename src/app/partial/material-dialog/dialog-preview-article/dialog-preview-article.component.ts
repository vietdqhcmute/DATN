import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-preview-article',
  templateUrl: './dialog-preview-article.component.html',
  styleUrls: ['./dialog-preview-article.component.scss']
})
export class DialogPreviewArticleComponent implements OnInit {
  form: FormGroup;
  description:string;

  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<DialogPreviewArticleComponent>,
      @Inject(MAT_DIALOG_DATA) data) {

      this.description = data.description;
  }

  ngOnInit() {
      this.form = this.fb.group({
          description: [this.description, []],
      });
  }

  save() {
      this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }}
