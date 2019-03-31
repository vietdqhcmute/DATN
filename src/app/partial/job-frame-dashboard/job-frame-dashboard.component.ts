import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-job-frame-dashboard',
  templateUrl: './job-frame-dashboard.component.html',
  styleUrls: ['./job-frame-dashboard.component.scss']
})
export class JobFrameDashboardComponent implements OnInit {
  @Input() title: String;
  @Input() salary: String;
  @Input() description: String;
  @Input() image_url: String;
  constructor() { }

  ngOnInit() {
  }

}
