import { Component, OnInit } from '@angular/core';
import { AdministratorComponent } from '../../administrator.component';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-admin-recruiter-manager',
  templateUrl: './admin-recruiter-manager.component.html',
  styleUrls: ['./admin-recruiter-manager.component.scss']
})
export class AdminRecruiterManagerComponent extends AdministratorComponent implements OnInit {
  searchText:String;
  displayedColumns: string[] = [
    "position",
    "company",
    "email",
    "website",
    "join",
    "deactivate"
  ];
  private recruiterTableSource;
  ngOnInit() {
    this.recruiterService.getAllRecruites().subscribe(recruiters=>{
      console.log(recruiters);
       this.recruiterTableSource = new MatTableDataSource(recruiters)
    })
  }
  applyFilter(filterValue: string) {
    this.recruiterTableSource.filter = filterValue.trim().toLowerCase();
  }
}
