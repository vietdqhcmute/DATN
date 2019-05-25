import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Articles } from "src/app/models/RecruiterData";
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
    private router: Router,
  ) {}
  ngOnInit() {
    this.titleService.setTitle("Searching for job");
  }

  onSearch() {
    this.router.navigate(['/search'], {queryParams:{key: this.searchText}})
  }
}
