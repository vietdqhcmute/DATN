import { Component, OnInit, OnDestroy, AfterViewChecked } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { AlertService } from "../services/alert.service";
import { CandidateService } from "../services/candidate.service";
import { RecruiterService } from "../services/recruiter.service";
import { AuthService } from '../services/auth.service';
import { AdminService } from '../services/admin.service';
@Component({
  selector: "app-administrator",
  templateUrl: "./administrator.component.html",
  styleUrls: ["./administrator.component.scss"]
})
export class AdministratorComponent implements OnInit, OnDestroy, AfterViewChecked {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));
  protected subscription: Subscription[];

  constructor(
    private titleService: Title,
    private breakpointObserver: BreakpointObserver,
    protected alertService: AlertService,
    protected candidateService: CandidateService,
    protected recruiterService: RecruiterService,
    protected authService: AuthService,
    protected adminService: AdminService
  ) {}

  ngOnInit() {
    this.titleService.setTitle("Administrator");
  }
  ngAfterViewChecked(): void {
    this.alertService.setHideTopBar(true);
  }
  ngOnDestroy(): void {
  }

  onLogOut(){
    this.authService.logout();
  }
}
