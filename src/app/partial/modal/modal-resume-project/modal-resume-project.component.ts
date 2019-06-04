import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Project } from "src/app/models/CandidateData";

@Component({
  selector: "app-modal-resume-project",
  templateUrl: "./modal-resume-project.component.html",
  styleUrls: ["./modal-resume-project.component.scss"]
})
export class ModalResumeProjectComponent implements OnInit {
  @Output() saveClick: EventEmitter<Project> = new EventEmitter();
  private emptyProject: Project = {
    project_name: "",
    description: "",
    start_month: 0,
    end_month: 0,
    start_year: 0,
    end_year: 0,
    current: false
  };
  private project: Project;
  constructor() {}

  ngOnInit() {}
  onOpenModal() {
    this.project = new Project(this.emptyProject);
  }
  onSave() {
    this.saveClick.emit(this.project);
  }
}
