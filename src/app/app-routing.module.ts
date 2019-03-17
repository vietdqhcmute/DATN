import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", loadChildren: "./layout/layout.module#LayoutModule" },
  { path: "login", loadChildren: "./login/login.module#LoginModule" },
  {
    path: "register",
    loadChildren: "./register/register.module#RegisterModule"
  },
  {
    path: "profile",
    loadChildren: "./candidate/candidate.module#CandidateModule"
  },
  {
    path: "recruiter",
    loadChildren: "./recruiter/recruiter.module#RecruiterModule"
  },
  {
    path: "administrator",
    loadChildren: "./administrator/administrator.module#AdministratorModule"
  },
  {
    path: "not-found",
    loadChildren: "./not-found/not-found.module#NotFoundModule"
  },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
