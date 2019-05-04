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
  imagePreview: string;

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
