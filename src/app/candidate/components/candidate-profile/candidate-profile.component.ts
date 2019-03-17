import { Component, OnInit } from "@angular/core";
import { Candidate } from "src/app/models/CandidateData";
import { CandidateService } from "src/app/services/candidate.service";
import { first } from "rxjs/operators";
import { Title } from '@angular/platform-browser';
@Component({
  selector: "app-candidate-profile",
  templateUrl: "./candidate-profile.component.html",
  styleUrls: ["./candidate-profile.component.scss"]
})
export class CandidateProfileComponent implements OnInit {
  isAuthenticated = false;
  email: string;
  candidate: Candidate = null;
  testEmail = "vietdqhcmute@gmail.com";
  allowEdit = false;
  defaultImageURL = "../../../../assets/images/tho-bay-mau-28.png";
  constructor(private candidateService: CandidateService,private titleService: Title) {}

  ngOnInit() {
    this.loadCandidateData(this.testEmail);
    this.titleService.setTitle("Profile");
  }
  private onEditButton() {
    if (this.allowEdit) {
      this.candidateService
        .updateCandidateByID(this.candidate._id, this.candidate)
        .subscribe(
          response => {
            console.log("Done!");
          },
          error => {
            console.log("Error!");
          }
        );
    }
    this.allowEdit = !this.allowEdit;
  }
  private loadCandidateData(email) {
    this.candidateService
      .getCandidateByEmail(email)
      .pipe(first())
      .subscribe(candidate => {
        this.candidate = <Candidate>candidate;
      });
  }
}
