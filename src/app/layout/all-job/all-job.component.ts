import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Articles } from "src/app/models/RecruiterData";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-all-job",
  templateUrl: "./all-job.component.html",
  styleUrls: ["./all-job.component.scss"]
})
export class AllJobComponent implements OnInit {
  searchText: string;
  searchArticles: Articles[] = [];
  sub: Subscription;

  constructor(
    private titleService: Title,
  ) {}
  ngOnInit() {
    this.titleService.setTitle("Searching for job");
  }

  onSearch() {

  }
}
