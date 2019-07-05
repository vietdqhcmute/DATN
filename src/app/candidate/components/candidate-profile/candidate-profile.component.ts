import { Component, OnInit, OnDestroy } from "@angular/core";
import { Candidate } from "src/app/models/CandidateData";
import { first } from "rxjs/operators";
import { Subscription } from "rxjs";
import { CandidateComponent } from "../../candidate.component";
import { DialogEditProfileComponent } from "src/app/partial/material-dialog/dialog-edit-profile/dialog-edit-profile.component";
import { MatDialogConfig } from "@angular/material";
import { Articles } from "src/app/models/RecruiterData";
import { Tag } from "src/app/models/Tag";
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
  articles: Articles[] = [];

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
          this.getArticlesHaveApplied();
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

    const dialogRef = this.dialog.open(
      DialogEditProfileComponent,
      dialogConfig
    );
    this.sub.push(
      dialogRef.afterClosed().subscribe(result => {
        if (!result) {
          return;
        }
        this.candidateService.updateCandidateByID(result._id, result).subscribe(
          res => {
            console.log(result.tags);
            console.log("Success: ", res);
          },
          error => {
            result.tags.forEach(tag => {
              this.tagService.getTagByContent(tag).subscribe(originalTag => {
                let params = {
                  _tag: originalTag._id,
                  candidate_id: result._id
                };
                this.candidateService.createReportTag(params).subscribe(
                  res => {
                    console.log(res);
                  },
                  err => {
                    console.log(err);
                  }
                );
              });
            });
          }
        );
      })
    );
  }
  saveAvatar(image: File) {
    this.candidateService.updateAvatar(image);
    this.candidateService.getAvatarUrl().subscribe(avatarUrl => {
      this.candidate.image_url = avatarUrl;
      this.candidateService
        .updateCandidateByID(this.candidate._id, this.candidate)
        .subscribe(response => {}, error => {});
    });
  }
  getArticlesHaveApplied() {
    this.articleService
      .getArticlesHaveBeenApplied(this.candidate._id)
      .subscribe(articles => {
        this.articles = articles;
      });
  }
}
