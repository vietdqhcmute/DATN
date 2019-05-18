import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  hideTopBar:boolean = false;
  sub: Subscription
  constructor(private authService: AuthService, private alertService: AlertService){}
  ngOnInit(){
    this.authService.autoLogin();
    this.sub = this.alertService.getHideTopBar().subscribe(isHideTopBar=>{
      this.hideTopBar = isHideTopBar;
    })
  }
   ngOnDestroy(): void {
    this.sub.unsubscribe();
   }
}
