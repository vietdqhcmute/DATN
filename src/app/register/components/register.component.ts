import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Title } from "@angular/platform-browser";
import { AlertService } from "src/app/services/alert.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  citySelections = ["Ho Chi Minh", "Ha Noi"];
  isLoading: boolean = false;
  constructor(
    protected authService: AuthService,
    protected titleService: Title,
    protected alertService: AlertService,
    protected router: Router
  ) {}

  ngOnInit() {}
}
