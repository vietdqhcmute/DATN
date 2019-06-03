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

  ngOnInit() {}

  onSaveExperience(modalExperience: Experience) {
    console.log(modalExperience);
  }
  onSaveProject(modalProject: Project) {
    console.log(modalProject);
  }
  onSaveEducation(modalEducation: Education) {
    console.log(modalEducation);
  }
}
