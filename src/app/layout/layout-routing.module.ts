import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllJobComponent } from "./all-job/all-job.component";
import { LayoutComponent } from "./layout.component";
import { JobDescriptionComponent } from "./job-description/job-description.component";
import { CompanyDescriptionComponent } from "./company-description/company-description.component";
import { CompanyReviewComponent } from "./company-review/company-review.component";
import { SearchCompanyComponent } from './search-company/search-company.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "alljob", pathMatch: "full" },
      { path: "alljob", component: AllJobComponent },
      { path: "job-description/:email/:id", component: JobDescriptionComponent },
      {
        path: "company/:email",
        component: CompanyDescriptionComponent
      },
      {
        path: "review/:email",
        component: CompanyReviewComponent
      },
      { path: "search-company", component: SearchCompanyComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
