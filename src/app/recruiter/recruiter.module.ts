import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecruiterComponent } from './recruiter.component';
import { RecruiterRoutingModule } from './recruiter-routing.module';
import { RecruiterCreatePostComponent } from './components/recruiter-create-post/recruiter-create-post.component';
import { RecruiterReviewComponent } from './components/recruiter-review/recruiter-review.component';
import { RecruiterDashboardComponent } from './components/recruiter-dashboard/recruiter-dashboard.component';
import { RecruiterSubcriberComponent } from './components/recruiter-subcriber/recruiter-subcriber.component';
import { PartialModule } from '../partial/partial.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { RecruiterProfileComponent } from './components/recruiter-profile/recruiter-profile.component';
import { RecruiterOverviewComponent } from './components/recruiter-overview/recruiter-overview.component';
import { MaterialModule } from '../material/material.module';
import { DialogPreviewArticleComponent } from '../partial/material-dialog/dialog-preview-article/dialog-preview-article.component';
import { DialogApplierListComponent } from '../partial/material-dialog/dialog-applier-list/dialog-applier-list.component';
import { DialogConfirmationComponent } from '../partial/material-dialog/dialog-confirmation/dialog-confirmation.component';
@NgModule({
  declarations: [
    RecruiterComponent,
    RecruiterCreatePostComponent,
    RecruiterReviewComponent,
    RecruiterDashboardComponent,
    RecruiterSubcriberComponent,
    RecruiterProfileComponent,
    RecruiterOverviewComponent
  ],
  imports: [
    CommonModule,
    RecruiterRoutingModule,
    PartialModule,
    CKEditorModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DialogPreviewArticleComponent,
    DialogApplierListComponent,
    DialogConfirmationComponent
  ]
})
export class RecruiterModule {}
