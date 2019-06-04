import { Component, OnInit, Input } from "@angular/core";
import { CreateCvComponent } from "../create-cv.component";
import {
  Resume,
  Candidate,
  Experience,
  Project,
  Education
} from "src/app/models/CandidateData";

@Component({
  selector: "app-get-info",
  templateUrl: "./get-info.component.html",
  styleUrls: ["./get-info.component.scss"]
})
export class GetInfoComponent extends CreateCvComponent implements OnInit {
  @Input() getInfoResume: Resume;
  @Input() getInfoCandidate: Candidate;

  ngOnInit() {
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
    this.getInfoResume.experience.splice(index,1);
  }
  onDeleteProject(index: number) {
    this.getInfoResume.project.splice(index,1);
  }
  onDeleteEducation(index: number) {
    this.getInfoResume.education.splice(index,1);
  }
}
