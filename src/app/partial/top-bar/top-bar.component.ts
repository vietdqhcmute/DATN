import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"]
})
export class TopBarComponent implements OnInit {
  @Input() isAuthenticated: boolean;
  sub: Subscription;
  constructor(private authService: AuthService) {}
  ngOnInit(){
  }
  onLogOut() {
    this.authService.logout();
  }
}
