import { Component, OnInit } from "@angular/core";
import { RecruiterParams } from "src/app/models/RegisterData";
import { AuthService } from "src/app/services/auth.service";
import { NgForm } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { RegisterComponent } from "../register.component";

@Component({
  selector: "app-register-recruiter",
  templateUrl: "./register-recruiter.component.html",
  styleUrls: ["./register-recruiter.component.scss"]
})
export class RegisterRecruiterComponent extends RegisterComponent
  implements OnInit {
  hide = true;
  confirm: String;
  recruiterParams = new RecruiterParams();
  ngOnInit() {
    this.titleService.setTitle("Create recruiter");
  }
  onSignUp(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.createRecruiter(this.recruiterParams).subscribe(
      response => {
        this.isLoading = false;
        this.router.navigate(["/login"]);
      },
      error => {
        this.isLoading = false;
        this.alertService.error(error, false);
      }
    );
  }
  onChangeCity(value) {
    this.recruiterParams.city = value;
  }
}
