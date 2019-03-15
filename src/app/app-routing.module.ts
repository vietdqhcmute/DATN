import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path:"all-job", loadChildren: "./layout/layout.module#LayoutModule"},
  { path: "login", loadChildren: "./login/login.module#LoginModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
