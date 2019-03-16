import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllJobComponent } from "./all-job/all-job.component";
import { LayoutComponent } from "./layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [{ path: "", component: AllJobComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
