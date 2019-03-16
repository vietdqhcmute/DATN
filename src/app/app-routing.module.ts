import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/components/register.component";
import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  { path: "", loadChildren: "./layout/layout.module#LayoutModule" },
  { path: "login", loadChildren: "./login/login.module#LoginModule" },
  {
    path: "register",
    component: AppComponent,
    loadChildren: "./register/register.module#RegisterModule"
  },
  { path: "not-found", loadChildren: "./not-found/not-found.module#NotFoundModule" },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
