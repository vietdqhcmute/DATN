import { Component, OnInit, Inject } from "@angular/core";
import { Project } from "src/app/models/CandidateData";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-dialog-resume-project",
  templateUrl: "./dialog-resume-project.component.html",
  styleUrls: ["./dialog-resume-project.component.scss"]
})
export class DialogResumeProjectComponent implements OnInit {
  project: Project;
  constructor(
    private dialogRef: MatDialogRef<DialogResumeProjectComponent>,
    @Inject(MAT_DIALOG_DATA) data: Project
  ) {
    this.project = data;
  }

  ngOnInit() {}
}
