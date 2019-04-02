import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CandidateParams } from "src/app/models/RegisterData";
import { AuthService } from "src/app/services/auth.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-register-candidate",
  templateUrl: "./register-candidate.component.html",
  styleUrls: ["./register-candidate.component.scss"]
})
export class RegisterCandidateComponent implements OnInit {
  candidateParams = new CandidateParams();
  hide = true;
  constructor(public authService: AuthService, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle("Create account");
  }
  onSignUp(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.createCandidate(this.candidateParams);
  }
}
