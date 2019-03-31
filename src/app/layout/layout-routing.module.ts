import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllJobComponent } from "./all-job/all-job.component";
import { LayoutComponent } from "./layout.component";
import { JobDescriptionComponent } from "./job-description/job-description.component";
import { CompanyDescriptionComponent } from "./company-description/company-description.component";
import { CompanyReviewComponent } from "./company-review/company-review.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "alljob", pathMatch: "full" },
      { path: "alljob", component: AllJobComponent },
      { path: "job-description/:company_email/:id", component: JobDescriptionComponent },
      {
        path: "company-description/:company_email",
        component: CompanyDescriptionComponent
      },
      {
        path: "company-review/:company_name",
        component: CompanyReviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
