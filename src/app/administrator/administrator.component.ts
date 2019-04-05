import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Component({
  selector: "app-administrator",
  templateUrl: "./administrator.component.html",
  styleUrls: ["./administrator.component.scss"]
})
export class AdministratorComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private titleService: Title,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
    this.titleService.setTitle("Administrator");
  }
}
