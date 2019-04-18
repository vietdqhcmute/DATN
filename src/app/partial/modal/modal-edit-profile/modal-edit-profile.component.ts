import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { Candidate } from "src/app/models/CandidateData";
import { ContentObserver } from "@angular/cdk/observers";
import { CandidateService } from "src/app/services/candidate.service";
import { Subscription } from "rxjs";
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: "app-modal-edit-profile",
  templateUrl: "./modal-edit-profile.component.html",
  styleUrls: ["./modal-edit-profile.component.scss"]
})
export class ModalEditProfileComponent implements OnInit, OnDestroy {
  @Input() candidate: Candidate;
  sub: Subscription;
  constructor(private candidateService: CandidateService, private alertService: AlertService) {}

  ngOnInit() {}
  onSave() {
    this.sub = this.candidateService
      .updateCandidateByID(this.candidate._id, this.candidate)
      .subscribe(res => {
        console.log("Success: ", res)
        this.alertService.success("Update user sucesss", false);
      }, error => {
        console.log("Error: ", error)
        this.alertService.error("Can not update user", false);
      });
  }
  ngOnDestroy(){
    this.sub.unsubscribe()
  }
}
