import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { AllJobComponent } from './all-job/all-job.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { PartialModule } from '../partial/partial.module';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { CompanyDescriptionComponent } from './company-description/company-description.component';

@NgModule({
  declarations: [LayoutComponent, AllJobComponent, JobDescriptionComponent, CompanyDescriptionComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    PartialModule
  ]
})
export class LayoutModule { }
