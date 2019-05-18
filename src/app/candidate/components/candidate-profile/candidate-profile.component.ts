import { Component, OnInit, OnDestroy } from "@angular/core";
import { Candidate } from "src/app/models/CandidateData";
import { first } from "rxjs/operators";
import { Subscription } from "rxjs";
import { CandidateComponent } from "../../candidate.component";
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
  sub: Subscription;
  imagePreview: string;

  ngOnInit() {
    if(this.authService.isSavedAuthData()){
      this.authService.isAuthenticated.next(true);
    }
    this.sub = this.route.paramMap.subscribe(params => {
      this.paramsEmail = params.get("email");
      this.loadCandidateData(this.paramsEmail);
      this.titleService.setTitle("Profile of " + this.paramsEmail);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private loadCandidateData(email) {
    this.sub = this.candidateService
      .getCandidateByEmail(email)
      .pipe(first())
      .subscribe(candidate => {
        this.candidate = <Candidate>candidate;
      });
    this.candidateService.getCandidateData(email);
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
