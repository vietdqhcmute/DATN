import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  private sub: Subscription;
  message: any;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
      this.sub = this.alertService.getMessage().subscribe(message => {
          this.message = message;
      });
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }
}
