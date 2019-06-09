import { Component, OnInit, OnDestroy } from "@angular/core";
import { RecruiterService } from "src/app/services/recruiter.service";
import { Recruiter } from "src/app/models/RecruiterData";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-search-company",
  templateUrl: "./search-company.component.html",
  styleUrls: ["./search-company.component.scss"]
})
export class SearchCompanyComponent implements OnInit, OnDestroy {
  searchText: string;
  recruiters: Recruiter[] = [];
  sub: Subscription[] = [];

  constructor(private recruiterService: RecruiterService) {}
  ngOnInit() {
    this.getAllCompany();
  }
  ngOnDestroy(): void {
    this.sub.forEach(subscription => subscription.unsubscribe());
  }
  onSearch(form: NgForm) {
    this.searchCompany(this.searchText);
  }

  searchCompany(searchText: string) {
    this.sub.push(
      this.recruiterService.searchCompany(searchText).subscribe(companies => {
        this.recruiters = companies;
      })
    );
  }
  getAllCompany() {
    this.sub.push(
      this.recruiterService.getAllRecruites().subscribe(companies => {
        this.recruiters = companies;
      })
    );
  }
}
