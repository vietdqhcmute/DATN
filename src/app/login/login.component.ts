import { Component, OnInit } from "@angular/core";
import { LoginData } from "../models/LoginData";
import { NgForm } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Title } from "@angular/platform-browser";
// import { AuthService } from '../services/auth.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  hide = true; //Use for hidden password
  isLoading_logIn = false;
  loginParams = new LoginData();

  constructor(public authService: AuthService, private titleService: Title) {}
  // constructor() {}
  ngOnInit() {
    this.titleService.setTitle("Login");
  }

  onSignIn(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.login(this.loginParams);
  }
}
