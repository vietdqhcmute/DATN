import { Component, OnInit } from "@angular/core";
import { RecruiterService } from "src/app/services/recruiter.service";
import { Recruiter } from "src/app/models/RecruiterData";
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-search-company",
  templateUrl: "./search-company.component.html",
  styleUrls: ["./search-company.component.scss"]
})
export class SearchCompanyComponent implements OnInit {
  private searchText: string;
  private recruiters: Recruiter[] = [];
  constructor(private recruiterService: RecruiterService) {}
  ngOnInit() {}

  onSearch(form: NgForm) {
    this.searchCompany(this.searchText);
  }

  searchCompany(searchText: string) {
    this.recruiterService.searchCompany(searchText).subscribe(companies => {
      this.recruiters = companies;
    });
  }
}
