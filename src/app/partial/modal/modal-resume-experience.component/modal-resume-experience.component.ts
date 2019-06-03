import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Experience } from "src/app/models/CandidateData";

@Component({
  selector: "app-modal-resume-expeience",
  templateUrl: "./modal-resume-experience.component.html",
  styleUrls: ["./modal-resume-experience.component.scss"]
})
export class ModalResumeExperienceComponent implements OnInit {
  @Output() saveClick: EventEmitter<Experience> = new EventEmitter();
  private experience: Experience = {
    company_name: "",
    title: "",
    location: "",
    description: "",
    start_month: 0,
    end_month: 0,
    start_year: 0,
    end_year: 0,
    current: false
  };
  constructor() {}

  ngOnInit() {}

  onSave() {
    this.saveClick.emit(this.experience);
  }
}
