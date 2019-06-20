import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Experience } from "src/app/models/CandidateData";

@Component({
  selector: "app-dialog-resume-experience",
  templateUrl: "./dialog-resume-experience.component.html",
  styleUrls: ["./dialog-resume-experience.component.scss"]
})
export class DialogResumeExperienceComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<DialogResumeExperienceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Experience
  ) {}

  ngOnInit() {}
}
