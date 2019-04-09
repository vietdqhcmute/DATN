import { Component, OnInit } from '@angular/core';
import { AdministratorComponent } from '../../administrator.component';

@Component({
  selector: 'app-admin-recruiter-manager',
  templateUrl: './admin-recruiter-manager.component.html',
  styleUrls: ['./admin-recruiter-manager.component.scss']
})
export class AdminRecruiterManagerComponent extends AdministratorComponent implements OnInit {
  searchText:String;
  users=[
    {userName:"Viet Do",email:"vietdqhcmute@gmail.com", created_at:"today"},
    {userName:"Amanotes",email:"amanotes@gmail.com", created_at:"today"}
  ];

  ngOnInit() {
  }

}
