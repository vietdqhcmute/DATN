import { Component, OnInit } from "@angular/core";
import { AdministratorComponent } from "../../administrator.component";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-admin-user-manager",
  templateUrl: "./admin-user-manager.component.html",
  styleUrls: ["./admin-user-manager.component.scss"]
})
export class AdminUserManagerComponent extends AdministratorComponent
  implements OnInit {
  searchText: String;
  displayedColumns: string[] = [
    "position",
    "username",
    "avatar",
    "email",
    "phone",
    "join",
    "deactivate"
  ];
  private candidateTableSource;
  ngOnInit() {
    this.adminService.getAllCandidatesStatus().subscribe(candidates => {
      this.candidateTableSource = new MatTableDataSource(candidates);
    });
  }
  applyFilter(filterValue: string) {
    this.candidateTableSource.filter = filterValue.trim().toLowerCase();
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
