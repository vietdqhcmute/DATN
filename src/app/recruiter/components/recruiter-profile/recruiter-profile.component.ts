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
  ngOnInit() {
    const recruiter_email = this.recruiterService.recruiter_email;
    this.recruiterService.getRecruiter(recruiter_email).subscribe(recruiter => {
      this.recruiter = recruiter;
      console.log(this.recruiter);
    });
  }

  onSave() {}
}
