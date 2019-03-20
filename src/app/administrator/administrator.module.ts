import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorComponent } from './administrator.component';
import { AdministratorRoutingModule } from './administrator-routing.module';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { PartialModule } from '../partial/partial.module';

@NgModule({
  declarations: [AdministratorComponent, SidebarComponent, HeaderComponent],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    PartialModule
  ]
})
export class AdministratorModule { }
