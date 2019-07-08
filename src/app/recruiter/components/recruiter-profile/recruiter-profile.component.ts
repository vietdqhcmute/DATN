import { Component, OnInit, OnDestroy } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Recruiter } from "src/app/models/RecruiterData";
import { RecruiterComponent } from "../../recruiter.component";
@Component({
  selector: "app-recruiter-profile",
  templateUrl: "./recruiter-profile.component.html",
  styleUrls: ["./recruiter-profile.component.scss"]
})
export class RecruiterProfileComponent extends RecruiterComponent
  implements OnInit, OnDestroy {
  public Editor = ClassicEditor;
  imagePreview: string;
  productionSelections = ["Production", "Outsourcing"];
  dayAtWorkSelections = ["Mon - Fri", "Partime", "Everyday"];
  employeeSelections = ["10+", "50+", "100+", "1000+"];
  citySelections = ["Ho Chi Minh", "Ha Noi"];
  isLoading: boolean = false;
  ngOnInit() {
    this.sub.push(
      this.route.parent.paramMap.subscribe(params => {
        this.loadRecruiterData(params.get("email"));
        this.getRecruiterEmail();
      })
    );
  }
  ngOnDestroy(): void {
    this.sub.forEach(subscription => subscription.unsubscribe());
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
    this.isLoading = true;
    this.sub.push(
      this.recruiterService
        .updateRecruiterByID(this.recruiter._id, this.recruiter)
        .subscribe(
          response => {
            this.isLoading = false;
            this.router.navigate([
              "recruiter",
              this.recruiter.email,
              "dashboard"
            ]);
          },
          error => {
            this.isLoading = false;
            this.router.navigate([
              "recruiter",
              this.recruiter.email,
              "dashboard"
            ]);
          }
        )
    );
  }
  onChangeEmployeesNumber(value) {
    this.recruiter.employees = value;
  }
  onChangeCity(value) {
    this.recruiter.city = value;
  }
  onChangeDayAtWork(value) {
    this.recruiter.day_at_work = value;
  }
  onChangeProdction(value) {
    this.recruiter.production = value;
  }
}
