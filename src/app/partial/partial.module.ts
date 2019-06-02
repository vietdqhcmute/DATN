import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { CompanyFrameComponent } from "./company-frame/company-frame.component";
import { RouterModule } from "@angular/router";
import { JobFrameDashboardComponent } from "./job-frame-dashboard/job-frame-dashboard.component";
import { MaterialModule } from "../material/material.module";
import { EditProfileDialogComponent } from "./material-dialog/edit-profile-dialog/edit-profile-dialog.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RecruiterReviewPostComponent } from "./recruiter-review-post/recruiter-review-post.component";
import { RatingStarComponent } from "./rating-star/rating-star.component";
import { ModalEditProfileComponent } from "./modal/modal-edit-profile/modal-edit-profile.component";
import { AlertComponent } from "./alert/alert.component";
import { ModalYesNoComponent } from "./modal/modal-yes-no/modal-yes-no.component";
import { ModalEditProfileReruiterComponent } from "./modal/modal-edit-profile-reruiter/modal-edit-profile-reruiter.component";
import { ModalResumeExperienceComponent } from "./modal/modal-resume-experience.component/modal-resume-experience.component";
import { ModalResumeProjectComponent } from "./modal/modal-resume-project/modal-resume-project.component";
import { ModalResumeEducationComponent } from "./modal/modal-resume-education/modal-resume-education.component";
import { TagFrameComponent } from './tag-frame/tag-frame.component';
import { ModalTagComponent } from './modal/modal-tag/modal-tag.component';
import { ModalPreviewArticleComponent } from './modal/modal-preview-article/modal-preview-article.component';
import { ModalApplierComponent } from './modal/modal-applier/modal-applier.component';

@NgModule({
  declarations: [
    TopBarComponent,
    CompanyFrameComponent,
    JobFrameDashboardComponent,
    EditProfileDialogComponent,
    RecruiterReviewPostComponent,
    RatingStarComponent,
    ModalEditProfileComponent,
    AlertComponent,
    ModalYesNoComponent,
    ModalEditProfileReruiterComponent,
    ModalResumeExperienceComponent,
    ModalResumeProjectComponent,
    ModalResumeEducationComponent,
    TagFrameComponent,
    ModalTagComponent,
    ModalPreviewArticleComponent,
    ModalApplierComponent
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
    EditProfileDialogComponent,
    RecruiterReviewPostComponent,
    RatingStarComponent,
    ModalEditProfileComponent,
    AlertComponent,
    ModalYesNoComponent,
    ModalEditProfileReruiterComponent,
    ModalResumeExperienceComponent,
    ModalResumeProjectComponent,
    ModalResumeEducationComponent,
    TagFrameComponent,
    ModalTagComponent,
    ModalPreviewArticleComponent,
    ModalApplierComponent
  ]
})
export class PartialModule {}
