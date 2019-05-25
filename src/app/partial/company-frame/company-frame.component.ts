import { Component, OnInit, Input } from "@angular/core";
import { Recruiter } from "src/app/models/RecruiterData";

@Component({
  selector: "app-company-frame",
  templateUrl: "./company-frame.component.html",
  styleUrls: ["./company-frame.component.scss"]
})
export class CompanyFrameComponent implements OnInit {
  @Input() company: Recruiter;
  constructor() {}

  ngOnInit() {}
}
