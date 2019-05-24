import { Component, OnInit } from '@angular/core';
import { AdministratorComponent } from '../../administrator.component';

@Component({
  selector: 'app-admin-user-manager',
  templateUrl: './admin-user-manager.component.html',
  styleUrls: ['./admin-user-manager.component.scss']
})
export class AdminUserManagerComponent extends AdministratorComponent implements OnInit {
  searchText:String;
  displayedColumns: string[] = [
    "position",
    "User name",
    "Email",
    "Phone",
    "Join date",
    "Deactivate"
  ];
  dataSource;

  ngOnInit() {
  }

}
