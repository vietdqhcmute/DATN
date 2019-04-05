import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { AllJobComponent } from './all-job/all-job.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { PartialModule } from '../partial/partial.module';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { CompanyDescriptionComponent } from './company-description/company-description.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CompanyReviewComponent } from './company-review/company-review.component';
import { MaterialModule } from '../material/material.module';
import { SearchCompanyComponent } from './search-company/search-company.component';
@NgModule({
  declarations: [LayoutComponent, AllJobComponent, JobDescriptionComponent, CompanyDescriptionComponent, CompanyReviewComponent, SearchCompanyComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    PartialModule,
    AngularFontAwesomeModule,
    MaterialModule
  ]
})
export class LayoutModule { }
