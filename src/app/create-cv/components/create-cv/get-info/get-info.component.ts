import { Component, OnInit, Input } from "@angular/core";
import { CreateCvComponent } from "../create-cv.component";
import { Resume, Candidate, Experience, Project } from "src/app/models/CandidateData";

@Component({
  selector: "app-get-info",
  templateUrl: "./get-info.component.html",
  styleUrls: ["./get-info.component.scss"]
})
export class GetInfoComponent extends CreateCvComponent implements OnInit {
  @Input() getInfoResume: Resume;
  @Input() getInfoCandidate: Candidate;

  ngOnInit() {}

  onSaveExperience(modaExperience: Experience){
    console.log(modaExperience);
  }
  onSaveProject(modaProject: Project){
    console.log(modaProject);
  }
}
