import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path:"all-job", loadChildren: "./layout/layout.module#LayoutModule"},
  { path: "", loadChildren: "./login/login.module#LoginModule" },
  // { path: "login", loadChildren: "./login/login.module#Logi  nModule" },
  { path: "register", loadChildren: "./register/register.module#RegisterModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
