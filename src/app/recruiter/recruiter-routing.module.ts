import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecruiterComponent } from "./recruiter.component";
import { RecruiterCreatePostComponent } from "./components/recruiter-create-post/recruiter-create-post.component";
import { RecruiterReviewComponent } from "./components/recruiter-review/recruiter-review.component";
import { RecruiterDashboardComponent } from "./components/recruiter-dashboard/recruiter-dashboard.component";
import { RecruiterSubcriberComponent } from "./components/recruiter-subcriber/recruiter-subcriber.component";
import { RecruiterProfileComponent } from "./components/recruiter-profile/recruiter-profile.component";
import { RecruiterOverviewComponent } from './components/recruiter-overview/recruiter-overview.component';

const routes: Routes = [
  {
    path: ":email",
    component: RecruiterComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      // { path: "", redirectTo: "create-post", pathMatch: "full" },
      { path: "create-post", component: RecruiterCreatePostComponent },
      // { path: "create-post/:id", component: RecruiterCreatePostComponent },
      { path: "review", component: RecruiterReviewComponent },
      { path: "dashboard", component: RecruiterDashboardComponent },
      { path: "subcriber", component: RecruiterSubcriberComponent },
      { path: "profile", component: RecruiterProfileComponent },
      { path: "overview", component: RecruiterOverviewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule {}
