import { Component, OnInit } from "@angular/core";
import { LoginData } from "../models/LoginData";
import { NgForm } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Title } from "@angular/platform-browser";
import { AlertService } from "../services/alert.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  hide = true; //Use for hidden password
  isLoading_logIn = false;
  loginParams = new LoginData();

  constructor(
    public authService: AuthService,
    private titleService: Title,
    private alertService: AlertService
  ) {}
  ngOnInit() {
    this.titleService.setTitle("Login");
    this.alertService.setHideTopBar(true);
  }

  onSignIn(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.login(this.loginParams);
  }
}
