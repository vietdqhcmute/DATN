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
  experiences: Experience[] = [];
  projects: Project[] = [];
  educations: Education[] = [];

  ngOnInit() {}

  onSaveExperience(modalExperience: Experience) {
    this.experiences.push(modalExperience);
  }
  onSaveProject(modalProject: Project) {
    this.projects.push(modalProject);
  }
  onSaveEducation(modalEducation: Education) {
    this.educations.push(modalEducation);
  }
}
