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
    "email",
    "phone",
    "join",
    "deactivate"
  ];
  private candidateTableSource;
  ngOnInit() {
    this.candidateService.getAllCandidates().subscribe(candidates => {
      this.candidateTableSource = new MatTableDataSource(candidates);
    });
  }
  applyFilter(filterValue: string) {
    this.candidateTableSource.filter = filterValue.trim().toLowerCase();
  }
  onDeactivate(id: string){
    console.log(id);
  }
}
