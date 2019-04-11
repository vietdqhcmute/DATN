import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-candidate",
  templateUrl: "./candidate.component.html",
  styleUrls: ["./candidate.component.scss"]
})
export class CandidateComponent implements OnInit {
  userAuthenticated: boolean;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userAuthenticated = isAuthenticated;
    });
  }
}
