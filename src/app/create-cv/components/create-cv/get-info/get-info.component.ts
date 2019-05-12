import { Component, OnInit, Input } from "@angular/core";
import { CreateCvComponent } from "../create-cv.component";
import { Resume, Candidate, Experience } from "src/app/models/CandidateData";

@Component({
  selector: "app-get-info",
  templateUrl: "./get-info.component.html",
  styleUrls: ["./get-info.component.scss"]
})
export class GetInfoComponent extends CreateCvComponent implements OnInit {
  @Input() getInfoResume: Resume;
  @Input() getInfoCandidate: Candidate;
  experience = this.testingService.experience;
  project = this.testingService.project;
  ngOnInit() {}
}
