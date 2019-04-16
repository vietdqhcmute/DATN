import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"]
})
export class TopBarComponent implements OnInit, OnDestroy {
  sub: Subscription;
  constructor(private authService: AuthService) {}
  userIsAuthenticated: Boolean;
  ngOnInit() {
    this.sub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        console.log(this.userIsAuthenticated);
      });
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  onLogOut() {
    this.authService.logout();
  }
}
