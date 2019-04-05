import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateComponent } from './candidate.component';
import { CandidateProfileComponent } from './components/candidate-profile/candidate-profile.component';
import { CandidateRoutingModule } from './candidate-routing.module';
import { PartialModule } from '../partial/partial.module';
import { RouterModule } from '@angular/router';
import { EditProfileDialogComponent } from '../partial/material-dialog/edit-profile-dialog/edit-profile-dialog.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [CandidateComponent, CandidateProfileComponent],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    PartialModule,
    RouterModule,
    FormsModule,
    MaterialModule
  ],
  entryComponents:[
    EditProfileDialogComponent
  ]
})
export class CandidateModule { }
