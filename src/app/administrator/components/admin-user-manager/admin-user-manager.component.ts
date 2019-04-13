import { Component, OnInit } from '@angular/core';
import { AdministratorComponent } from '../../administrator.component';

@Component({
  selector: 'app-admin-user-manager',
  templateUrl: './admin-user-manager.component.html',
  styleUrls: ['./admin-user-manager.component.scss']
})
export class AdminUserManagerComponent extends AdministratorComponent implements OnInit {
  searchText:String;
  users=[
    {userName:"Viet Do",email:"vietdqhcmute@gmail.com", created_at:"today"},
    {userName:"Amanotes",email:"amanotes@gmail.com", created_at:"today"}
  ];
  ngOnInit() {
  }

}
