import { Component, OnInit, Inject } from "@angular/core";
import { Education } from "src/app/models/CandidateData";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-dialog-resume-education",
  templateUrl: "./dialog-resume-education.component.html",
  styleUrls: ["./dialog-resume-education.component.scss"]
})
export class DialogResumeEducationComponent implements OnInit {
  education: Education;
  constructor(
    private dialogRef: MatDialogRef<DialogResumeEducationComponent>,
    @Inject(MAT_DIALOG_DATA) data: Education
  ) {
    this.education = data;
  }

  ngOnInit() {}
}
