import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Candidate } from "src/app/models/CandidateData";
import { CandidateService } from "src/app/services/candidate.service";
import { first } from "rxjs/operators";
import { Title } from "@angular/platform-browser";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { EditProfileDialogComponent } from "src/app/partial/material-dialog/edit-profile-dialog/edit-profile-dialog.component";
@Component({
  selector: "app-candidate-profile",
  templateUrl: "./candidate-profile.component.html",
  styleUrls: ["./candidate-profile.component.scss"]
})
export class CandidateProfileComponent implements OnInit {
  isAuthenticated = false;
  paramsEmail:String;
  email: string;
  candidate: Candidate = null;
  allowEdit = false;
  defaultImageURL = "../../../../assets/images/tho-bay-mau-28.png";

  constructor(
    private candidateService: CandidateService,
    private titleService: Title,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.paramsEmail = params.get("email");
      this.loadCandidateData(this.paramsEmail);
      this.titleService.setTitle("Profile of "+ this.paramsEmail);
    })
  }

  private onEditButton() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.width = "110vh";
    dialogConfig.height = "90vh";

    this.dialog.open(EditProfileDialogComponent, dialogConfig);
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
