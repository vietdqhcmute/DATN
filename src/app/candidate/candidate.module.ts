import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateComponent } from './candidate.component';
import { CandidateProfileComponent } from './components/candidate-profile/candidate-profile.component';
import { CandidateRoutingModule } from './candidate-routing.module';
import { PartialModule } from '../partial/partial.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CandidateComponent, CandidateProfileComponent],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    PartialModule,
    RouterModule
  ]
})
export class CandidateModule { }
