import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Experience } from "src/app/models/CandidateData";

@Component({
  selector: "app-modal-resume-expeience",
  templateUrl: "./modal-resume-experience.component.html",
  styleUrls: ["./modal-resume-experience.component.scss"]
})
export class ModalResumeExperienceComponent implements OnInit {
  @Output() saveClick: EventEmitter<Experience> = new EventEmitter();
  private emptyExperience: Experience = {
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
  private experience: Experience;
  constructor() {}

  ngOnInit() {
    this.experience = new Experience(this.emptyExperience);
  }

  onOpenModal() {
    this.experience = new Experience(this.emptyExperience);
  }

  onSave() {
    this.saveClick.emit(this.experience);
  }
}
