import { Component, OnInit } from "@angular/core";
import { RecruiterParams } from 'src/app/models/RegisterData';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-register-recruiter",
  templateUrl: "./register-recruiter.component.html",
  styleUrls: ["./register-recruiter.component.scss"]
})
export class RegisterRecruiterComponent implements OnInit {
  hide = true;
  confirm: String;
  recruiterParams = new RecruiterParams();
  constructor(public authService: AuthService) {}

  ngOnInit() {}
  onSignUp(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.createRecruiter(this.recruiterParams);
  }
}
