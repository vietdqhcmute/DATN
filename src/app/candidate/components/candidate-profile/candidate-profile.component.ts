import { Component, OnInit, OnDestroy } from "@angular/core";
import { Candidate } from "src/app/models/CandidateData";
import { first } from "rxjs/operators";
import { Subscription } from "rxjs";
import { CandidateComponent } from "../../candidate.component";
import { DialogEditProfileComponent } from "src/app/partial/material-dialog/dialog-edit-profile/dialog-edit-profile.component";
import { MatDialogConfig } from "@angular/material";
@Component({
  selector: "app-candidate-profile",
  templateUrl: "./candidate-profile.component.html",
  styleUrls: ["./candidate-profile.component.scss"]
})
export class CandidateProfileComponent extends CandidateComponent
  implements OnInit, OnDestroy {
  isAuthenticated = false;
  paramsEmail: String;
  email: string;
  allowEdit = false;
  defaultImageURL = "../../../../assets/images/tho-bay-mau-28.png";
  imagePreview: string;

  ngOnInit() {
    if (this.authService.isSavedAuthData()) {
      this.authService.isAuthenticated.next(true);
    }
    this.sub.push(
      this.route.paramMap.subscribe(params => {
        this.paramsEmail = params.get("email");
        this.loadCandidateData(this.paramsEmail);
      })
    );
  }

  private loadCandidateData(email) {
    this.sub.push(
      this.candidateService
        .getCandidate(email)
        .pipe(first())
        .subscribe(candidate => {
          this.titleService.setTitle(candidate.display_name);
          this.candidate = <Candidate>candidate;
        })
    );
    this.candidateService.getCandidate(email);
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result.toString();
    };
    reader.readAsDataURL(file);
    this.saveAvatar(file);
  }
  onEditProfile() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;

    dialogConfig.width = "112vh";
    dialogConfig.height = "88vh";
    dialogConfig.data = this.candidate;

    this.dialog.open(DialogEditProfileComponent, dialogConfig);
  }
  saveAvatar(image: File) {
    this.candidateService.updateAvatar(image);
    this.candidateService.getAvatarUrl().subscribe(avatarUrl => {
      this.candidate.image_url = avatarUrl;
      this.candidateService
        .updateCandidateByID(this.candidate._id, this.candidate)
        .subscribe(response => {});
    });
  }
}
