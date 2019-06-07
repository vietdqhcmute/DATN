import { Component, OnInit, OnDestroy } from "@angular/core";
import { RecruiterComponent } from "../../recruiter.component";
import { first } from "rxjs/operators";
import { Recruiter } from "src/app/models/RecruiterData";

@Component({
  selector: "app-recruiter-overview",
  templateUrl: "./recruiter-overview.component.html",
  styleUrls: ["./recruiter-overview.component.scss"]
})
export class RecruiterOverviewComponent extends RecruiterComponent
  implements OnInit, OnDestroy {
  overview: string;

  ngOnInit() {
    this.sub.push(
      this.route.parent.paramMap.subscribe(params => {
        this.getOverView(params.get("email"));
      })
    );
  }
  ngOnDestroy(): void {
    this.sub.forEach(subscription => subscription.unsubscribe());
  }

  getOverView(email) {
    this.sub.push(
      this.recruiterService
        .getRecruiter(email)
        .pipe(first())
        .subscribe(recruiter => {
          this.overview = recruiter.overview;
        })
    );
  }
}
