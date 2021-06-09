import { Component, OnInit } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { AlertService } from "./services/alert.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  hideTopBar: boolean;
  constructor(
    private authService: AuthService,
    private alertService: AlertService
  ) {}
  ngOnInit() {
    this.hideTopBar = true;
    // this.authService.autoLogin();
    this.alertService.getHideTopBar().subscribe((isHideTopBar) => {
      this.hideTopBar = isHideTopBar;
    });
  }
}
