import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Resume, Candidate } from "src/app/models/CandidateData";
import { CandidateService } from "src/app/services/candidate.service";

@Component({
  selector: "app-tool-bar",
  templateUrl: "./tool-bar.component.html",
  styleUrls: ["./tool-bar.component.scss"]
})
export class ToolBarComponent implements OnInit {
  @Input() toolBarResume: Resume;
  @Input() toolBarCandidate: Candidate;
  constructor(private candidateService: CandidateService) {}

  ngOnInit() {}

  onSave() {
    this.candidateService
      .updateCandidateByID(this.toolBarCandidate._id, this.toolBarCandidate)
      .subscribe(success => {});
  }
}
