import { Component, OnInit } from "@angular/core";
import { AuthService } from '../services/auth.service';

@Component({
  selector: "app-recruiter",
  templateUrl: "./recruiter.component.html",
  styleUrls: ["./recruiter.component.scss"]
})
export class RecruiterComponent implements OnInit {
  image_url =
    "https://cdn.itviec.com/employers/amanotes/logo/w170/8dM6PZybgr1ahE2Fr2pac4bm/amanotes-logo.png";
  company_name = "Amanotes JSC";
  constructor(public authService: AuthService) {}

  ngOnInit() {}
  onLogOut() {
    // this.authService.logOut();
  }
}
