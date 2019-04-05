import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RegisterCandidateComponent } from './components/register-candidate/register-candidate.component';
import { RegisterRecruiterComponent } from './components/register-recruiter/register-recruiter.component';
import { RegisterComponent } from './components/register.component';


@NgModule({
  declarations: [RegisterCandidateComponent, RegisterRecruiterComponent, RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
