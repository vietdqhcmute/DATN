import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterCandidateComponent } from './components/register-candidate/register-candidate.component';
import { RegisterRecruiterComponent } from './components/register-recruiter/register-recruiter.component';

@NgModule({
  declarations: [RegisterCandidateComponent, RegisterRecruiterComponent],
  imports: [
    CommonModule
  ]
})
export class RegisterModule { }
