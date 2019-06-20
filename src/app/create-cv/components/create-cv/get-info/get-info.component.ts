import { Component, OnInit, Input } from "@angular/core";
import { CreateCvComponent } from "../create-cv.component";
import {
  Resume,
  Candidate,
  Experience,
  Project,
  Education
} from "src/app/models/CandidateData";
import { MatDialogConfig } from "@angular/material";
import { DialogResumeExperienceComponent } from "src/app/partial/material-dialog/dialog-resume-experience/dialog-resume-experience.component";
import { DialogResumeEducationComponent } from "src/app/partial/material-dialog/dialog-resume-education/dialog-resume-education.component";
import { DialogResumeProjectComponent } from "src/app/partial/material-dialog/dialog-resume-project/dialog-resume-project.component";

@Component({
  selector: "app-get-info",
  templateUrl: "./get-info.component.html",
  styleUrls: ["./get-info.component.scss"]
})
export class GetInfoComponent extends CreateCvComponent implements OnInit {
  @Input() getInfoResume: Resume;
  @Input() getInfoCandidate: Candidate;

  ngOnInit() {}

  onAddExperience() {
    const dialogConfig = this.configDefaultMatDialog();
    const dialogRef = this.dialog.open(
      DialogResumeExperienceComponent,
      dialogConfig
    );
  }
  onAddEducation() {
    const dialogConfig = this.configDefaultMatDialog();
    const dialogRef = this.dialog.open(
      DialogResumeEducationComponent,
      dialogConfig
    );
  }
  onAddProject() {
    const dialogConfig = this.configDefaultMatDialog();
    const dialogRef = this.dialog.open(
      DialogResumeProjectComponent,
      dialogConfig
    );
  }

  onSaveExperience(modalExperience: Experience) {
    this.getInfoResume.experience.push(modalExperience);
  }
  onSaveProject(modalProject: Project) {
    this.getInfoResume.project.push(modalProject);
  }
  onSaveEducation(modalEducation: Education) {
    this.getInfoResume.education.push(modalEducation);
  }

  onDeleteExperience(index: number) {
    this.getInfoResume.experience.splice(index, 1);
  }
  onDeleteProject(index: number) {
    this.getInfoResume.project.splice(index, 1);
  }
  onDeleteEducation(index: number) {
    this.getInfoResume.education.splice(index, 1);
  }

  configDefaultMatDialog(): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    return dialogConfig;
  }
}
