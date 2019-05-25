import { Component, OnInit } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Recruiter } from "src/app/models/RecruiterData";
import { RecruiterComponent } from "../../recruiter.component";
@Component({
  selector: "app-recruiter-profile",
  templateUrl: "./recruiter-profile.component.html",
  styleUrls: ["./recruiter-profile.component.scss"]
})
export class RecruiterProfileComponent extends RecruiterComponent
  implements OnInit {
  public Editor = ClassicEditor;
  imagePreview: string;

  ngOnInit() {
    this.recruiterService.getRecruiter(this.recruiterEmail).subscribe(recruiter => {
      this.recruiter = recruiter;
    });
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
    this.recruiterService.updateAvatar(image);
    this.recruiterService.getAvatarUrl().subscribe(avatarUrl => {
      this.recruiter.image_url = avatarUrl;
      this.recruiterService
        .updateRecruiterByID(this.recruiter._id, this.recruiter)
        .subscribe(response => {});
    });
  }

  onSave() {
    this.recruiterService
      .updateRecruiterByID(this.recruiter._id, this.recruiter)
      .subscribe(response => {
      });
  }
}
