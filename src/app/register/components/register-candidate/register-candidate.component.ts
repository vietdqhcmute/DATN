import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CandidateParams } from "src/app/models/RegisterData";
import { RegisterComponent } from "../register.component";

@Component({
  selector: "app-register-candidate",
  templateUrl: "./register-candidate.component.html",
  styleUrls: ["./register-candidate.component.scss"]
})
export class RegisterCandidateComponent extends RegisterComponent
  implements OnInit {
  candidateParams = new CandidateParams();
  hide = true;

  ngOnInit() {
    this.titleService.setTitle("Create account");
  }
  onSignUp(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.createCandidate(this.candidateParams).subscribe(
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
}
