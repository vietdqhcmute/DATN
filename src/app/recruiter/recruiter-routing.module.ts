import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecruiterComponent } from "./recruiter.component";
import { RecruiterCreatePostComponent } from './components/recruiter-create-post/recruiter-create-post.component';
import { RecruiterReviewComponent } from './components/recruiter-review/recruiter-review.component';
import { RecruiterDashboardComponent } from './components/recruiter-dashboard/recruiter-dashboard.component';
import { RecruiterSubcriberComponent } from './components/recruiter-subcriber/recruiter-subcriber.component';

const routes: Routes = [
  {
    path: ":email",
    component: RecruiterComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "create-post", component: RecruiterCreatePostComponent },
      { path: "review", component: RecruiterReviewComponent },
      { path: "dashboard", component: RecruiterDashboardComponent },
      { path: "subcriber", component: RecruiterSubcriberComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule {}