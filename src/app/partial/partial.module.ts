import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { CompanyFrameComponent } from "./company-frame/company-frame.component";
import { RouterModule } from "@angular/router";
import { JobFrameDashboardComponent } from "./job-frame-dashboard/job-frame-dashboard.component";
import { MaterialModule } from '../material/material.module';
import { EditProfileDialogComponent } from './material-dialog/edit-profile-dialog/edit-profile-dialog.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    TopBarComponent,
    CompanyFrameComponent,
    JobFrameDashboardComponent,
    EditProfileDialogComponent
  ],
  imports: [CommonModule, RouterModule,MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [CompanyFrameComponent, TopBarComponent, JobFrameDashboardComponent, EditProfileDialogComponent]
})
export class PartialModule {}
