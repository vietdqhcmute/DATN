import { Component, OnInit } from "@angular/core";
import { AdministratorComponent } from "../../administrator.component";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-admin-recruiter-manager",
  templateUrl: "./admin-recruiter-manager.component.html",
  styleUrls: ["./admin-recruiter-manager.component.scss"]
})
export class AdminRecruiterManagerComponent extends AdministratorComponent
  implements OnInit {
  searchText: String;
  displayedColumns: string[] = [
    "position",
    "company",
    "logo",
    "email",
    "website",
    "join",
    "deactivate"
  ];
  private recruiterTableSource;
  ngOnInit() {
    this.adminService.getAllRecruitersStatus().subscribe(recruiters => {
      this.recruiterTableSource = new MatTableDataSource(recruiters);
    });
  }
  applyFilter(filterValue: string) {
    this.recruiterTableSource.filter = filterValue.trim().toLowerCase();
  }
  onDeactivate(id: string) {
    this.adminService.deactivateUser(id).subscribe(success => {
      console.log(success);
    });
  }
  onActivate(id: string) {
    this.adminService.activateUser(id).subscribe(success => {
      console.log(success);
    });
  }
}
