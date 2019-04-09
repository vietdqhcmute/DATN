import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdministratorComponent } from "./administrator.component";
import { AdministratorRoutingModule } from "./administrator-routing.module";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { HeaderComponent } from "./layout/header/header.component";
import { PartialModule } from "../partial/partial.module";
import { MaterialModule } from "../material/material.module";
import { NavTopComponent } from "./layout/nav-top/nav-top.component";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from "@angular/material";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { AdminChartComponent } from "./components/admin-chart/admin-chart.component";
import { AdminUserManagerComponent } from "./components/admin-user-manager/admin-user-manager.component";
import { FormsModule } from '@angular/forms';
import { AdminRecruiterManagerComponent } from './components/admin-recruiter-manager/admin-recruiter-manager.component';

@NgModule({
  declarations: [
    AdministratorComponent,
    SidebarComponent,
    HeaderComponent,
    NavTopComponent,
    AdminDashboardComponent,
    AdminChartComponent,
    AdminUserManagerComponent,
    AdminRecruiterManagerComponent,

  ],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    PartialModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule
  ]
})
export class AdministratorModule {}
