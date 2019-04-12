import { Component, OnInit, OnDestroy } from "@angular/core";
import { Candidate } from "src/app/models/CandidateData";
import { first } from "rxjs/operators";
import { Subscription } from 'rxjs';
import { CandidateComponent } from '../../candidate.component';
@Component({
  selector: "app-candidate-profile",
  templateUrl: "./candidate-profile.component.html",
  styleUrls: ["./candidate-profile.component.scss"]
})
export class CandidateProfileComponent extends CandidateComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  paramsEmail:String;
  email: string;
  allowEdit = false;
  defaultImageURL = "../../../../assets/images/tho-bay-mau-28.png";
  sub: Subscription;

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      this.paramsEmail = params.get("email");
      this.loadCandidateData(this.paramsEmail);
      this.titleService.setTitle("Profile of "+ this.paramsEmail);
    })
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  private loadCandidateData(email) {
    this.sub = this.candidateService
      .getCandidateByEmail(email)
      .pipe(first())
      .subscribe(candidate => {
        this.candidate = <Candidate>candidate;
      });
  }
}
