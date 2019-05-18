import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"]
})
export class TopBarComponent implements OnInit {
  private isAuthenticated: boolean = false;
  sub: Subscription;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.getUserAuthenticated().subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }
  onLogOut() {
    this.authService.logout();
  }
}
