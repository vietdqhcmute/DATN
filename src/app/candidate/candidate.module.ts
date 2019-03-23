import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateComponent } from './candidate.component';
import { CandidateProfileComponent } from './components/candidate-profile/candidate-profile.component';
import { CandidateRoutingModule } from './candidate-routing.module';
import { PartialModule } from '../partial/partial.module';
import { RouterModule } from '@angular/router';
import { CreateCvComponent } from './components/create-cv/create-cv.component';
import { GetInfoComponent } from './components/create-cv/get-info/get-info.component';
import { PreviewCvComponent } from './components/create-cv/preview-cv/preview-cv.component';
import { TemplateSelectionComponent } from './components/create-cv/template-selection/template-selection.component';
import { ToolBarComponent } from './components/create-cv/tool-bar/tool-bar.component';
import { EditProfileDialogComponent } from '../partial/material-dialog/edit-profile-dialog/edit-profile-dialog.component';

@NgModule({
  declarations: [CandidateComponent, CandidateProfileComponent,CreateCvComponent, GetInfoComponent, PreviewCvComponent, TemplateSelectionComponent, ToolBarComponent],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    PartialModule,
    RouterModule
  ],
  entryComponents:[
    EditProfileDialogComponent
  ]
})
export class CandidateModule { }
