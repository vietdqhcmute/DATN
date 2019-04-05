import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdministratorComponent } from "./administrator.component";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { AdminChartComponent } from "./components/admin-chart/admin-chart.component";
import { AdminUserManagerComponent } from "./components/admin-user-manager/admin-user-manager.component";

const routes: Routes = [
  {
    path: "",
    component: AdministratorComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: AdminDashboardComponent },
      { path: "chart", component: AdminChartComponent },
      { path: "user-manager", component: AdminUserManagerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule {}
