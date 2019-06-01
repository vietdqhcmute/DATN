import { Component, OnInit } from "@angular/core";
import { RecruiterComponent } from "../../recruiter.component";
import { first } from "rxjs/operators";
import { Recruiter } from "src/app/models/RecruiterData";

@Component({
  selector: "app-recruiter-overview",
  templateUrl: "./recruiter-overview.component.html",
  styleUrls: ["./recruiter-overview.component.scss"]
})
export class RecruiterOverviewComponent extends RecruiterComponent
  implements OnInit {
  private overview: string;
  ngOnInit() {
    this.sub = this.route.parent.paramMap.subscribe(params => {
      this.getOverView(params.get("email"));
    });
  }

  getOverView(email) {
    this.recruiterService
      .getRecruiter(email)
      .pipe(first())
      .subscribe(recruiter => {
        this.overview = recruiter.overview;
      });
  }
}
