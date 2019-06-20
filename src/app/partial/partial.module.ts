import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { CompanyFrameComponent } from "./company-frame/company-frame.component";
import { RouterModule } from "@angular/router";
import { JobFrameDashboardComponent } from "./job-frame-dashboard/job-frame-dashboard.component";
import { MaterialModule } from "../material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RecruiterReviewPostComponent } from "./recruiter-review-post/recruiter-review-post.component";
import { RatingStarComponent } from "./rating-star/rating-star.component";
import { ModalEditProfileComponent } from "./modal/modal-edit-profile/modal-edit-profile.component";
import { AlertComponent } from "./alert/alert.component";
import { ModalEditProfileReruiterComponent } from "./modal/modal-edit-profile-reruiter/modal-edit-profile-reruiter.component";
import { ModalResumeExperienceComponent } from "./modal/modal-resume-experience.component/modal-resume-experience.component";
import { ModalResumeProjectComponent } from "./modal/modal-resume-project/modal-resume-project.component";
import { ModalResumeEducationComponent } from "./modal/modal-resume-education/modal-resume-education.component";
import { TagFrameComponent } from "./tag-frame/tag-frame.component";
import { ModalTagComponent } from "./modal/modal-tag/modal-tag.component";
import { ModalPreviewArticleComponent } from "./modal/modal-preview-article/modal-preview-article.component";
import { RecruiterReviewRatingComponent } from "./recruiter-review-rating/recruiter-review-rating.component";
import { DialogPreviewArticleComponent } from "./material-dialog/dialog-preview-article/dialog-preview-article.component";
import { DialogApplierListComponent } from "./material-dialog/dialog-applier-list/dialog-applier-list.component";
import { DialogConfirmationComponent } from "./material-dialog/dialog-confirmation/dialog-confirmation.component";
import { DialogEditProfileComponent } from "./material-dialog/dialog-edit-profile/dialog-edit-profile.component";
import { DialogResumeExperienceComponent } from './material-dialog/dialog-resume-experience/dialog-resume-experience.component';
import { DialogResumeEducationComponent } from './material-dialog/dialog-resume-education/dialog-resume-education.component';
import { DialogResumeProjectComponent } from './material-dialog/dialog-resume-project/dialog-resume-project.component';

@NgModule({
  declarations: [
    TopBarComponent,
    CompanyFrameComponent,
    JobFrameDashboardComponent,
    RecruiterReviewPostComponent,
    RatingStarComponent,
    ModalEditProfileComponent,
    AlertComponent,
    ModalEditProfileReruiterComponent,
    ModalResumeExperienceComponent,
    ModalResumeProjectComponent,
    ModalResumeEducationComponent,
    TagFrameComponent,
    ModalTagComponent,
    ModalPreviewArticleComponent,
    ModalPreviewArticleComponent,
    RecruiterReviewRatingComponent,
    DialogPreviewArticleComponent,
    DialogApplierListComponent,
    DialogConfirmationComponent,
    DialogEditProfileComponent,
    DialogResumeExperienceComponent,
    DialogResumeEducationComponent,
    DialogResumeProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CompanyFrameComponent,
    TopBarComponent,
    JobFrameDashboardComponent,
    RecruiterReviewPostComponent,
    RatingStarComponent,
    ModalEditProfileComponent,
    AlertComponent,
    ModalEditProfileReruiterComponent,
    ModalResumeExperienceComponent,
    ModalResumeProjectComponent,
    ModalResumeEducationComponent,
    TagFrameComponent,
    ModalTagComponent,
    ModalPreviewArticleComponent,
    ModalPreviewArticleComponent,
    RecruiterReviewRatingComponent,
    DialogPreviewArticleComponent,
    DialogApplierListComponent,
    DialogConfirmationComponent,
    DialogEditProfileComponent,
    DialogResumeExperienceComponent
  ]
})
export class PartialModule {}
