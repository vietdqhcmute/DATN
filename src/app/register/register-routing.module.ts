import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterCandidateComponent } from "./components/register-candidate/register-candidate.component";
import { RegisterRecruiterComponent } from './components/register-recruiter/register-recruiter.component';

const registerRoutes: Routes = [
  { path: "", component: RegisterCandidateComponent },
  { path: "recruiter", component: RegisterRecruiterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(registerRoutes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule {}
