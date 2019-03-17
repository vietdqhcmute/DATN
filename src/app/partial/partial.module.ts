import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { CompanyFrameComponent } from "./company-frame/company-frame.component";
import { RouterModule } from "@angular/router";
import { JobFrameDashboardComponent } from "./job-frame-dashboard/job-frame-dashboard.component";

@NgModule({
  declarations: [
    TopBarComponent,
    CompanyFrameComponent,
    JobFrameDashboardComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [CompanyFrameComponent, TopBarComponent, JobFrameDashboardComponent]
})
export class PartialModule {}
