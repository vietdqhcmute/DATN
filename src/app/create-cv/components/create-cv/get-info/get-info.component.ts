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
    dialogConfig.data = {};
    const dialogRef = this.dialog.open(
      DialogResumeExperienceComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe(result => {
      this.getInfoResume.experience.push(result);
      console.log(result);
    });
  }
  onAddEducation() {
    const dialogConfig = this.configDefaultMatDialog();
    dialogConfig.data = {};
    const dialogRef = this.dialog.open(
      DialogResumeEducationComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe(result => {
      this.getInfoResume.education.push(result);
      console.log(result);
    });
  }
  onAddProject() {
    const dialogConfig = this.configDefaultMatDialog();
    dialogConfig.data = {};
    const dialogRef = this.dialog.open(
      DialogResumeProjectComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe(result => {
      this.getInfoResume.project.push(result);
      console.log(result);
    });
  }

  onModifyExperience(item: Experience) {
    const dialogConfig = this.configDefaultMatDialog();
    dialogConfig.data = item;
    const dialogRef = this.dialog.open(
      DialogResumeExperienceComponent,
      dialogConfig
    );
  }
  onModifyProject(item: Project) {
    const dialogConfig = this.configDefaultMatDialog();
    dialogConfig.data = item;
    const dialogRef = this.dialog.open(
      DialogResumeProjectComponent,
      dialogConfig
    );
  }
  onModifyEducation(item: Education) {
    const dialogConfig = this.configDefaultMatDialog();
    dialogConfig.data = item;
    const dialogRef = this.dialog.open(
      DialogResumeEducationComponent,
      dialogConfig
    );
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

  onAddSkill() {
    let skill = new String("New skill");
    this.getInfoResume.skill.push(skill);
    console.log(this.getInfoResume.skill);
  }
  deleteSkill(index) {
    this.getInfoResume.skill.splice(index, 1);
  }
  //
  confirmSkill(index, item) {
    this.getInfoResume.skill[index] = item;
  }

  private configDefaultMatDialog(): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    return dialogConfig;
  }
}
