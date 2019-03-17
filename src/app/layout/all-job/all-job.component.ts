import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-all-job",
  templateUrl: "./all-job.component.html",
  styleUrls: ["./all-job.component.scss"]
})
export class AllJobComponent implements OnInit {
  constructor(private titleService: Title) {}
  ngOnInit() {
    this.titleService.setTitle("All jobs");
  }
}
