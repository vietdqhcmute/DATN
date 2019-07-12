import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./guard/auth.guard";
import { NotAuthorizeComponent } from "./not-authorize/not-authorize.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RoleGuard } from "./guard/role.guard";
import { LoginGuard } from "./guard/login.guard";

const routes: Routes = [
  { path: "", loadChildren: "./layout/layout.module#LayoutModule" },
  {
    path: "login",
    loadChildren: "./login/login.module#LoginModule",
    canActivate: [LoginGuard]
  },
  {
    path: "register",
    loadChildren: "./register/register.module#RegisterModule"
  },
  {
    path: "profile",
    loadChildren: "./candidate/candidate.module#CandidateModule",
    canActivate: [AuthGuard],
    data: { role: 1 }
  },
  {
    path: "recruiter",
    loadChildren: "./recruiter/recruiter.module#RecruiterModule",
    canActivate: [AuthGuard],
    data: { role: 2 }
  },
  {
    path: "administrator",
    loadChildren: "./administrator/administrator.module#AdministratorModule",
    canActivate: [AuthGuard],
    data: { role: 3 }
  },
  {
    path: "not-found",
    component: NotFoundComponent
  },
  {
    path: "not-authorize",
    component: NotAuthorizeComponent
  },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
