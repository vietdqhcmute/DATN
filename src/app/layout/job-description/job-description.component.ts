import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.scss']
})
export class JobDescriptionComponent implements OnInit {
  imageURL ="https://cdn.itviec.com/employers/codebox-solutions/logo/w170/iyjuPfdRuWT3EQFTo6PCkKms/codebox-solutions-logo.png";
  company_name = "Codebox Solution Ltd";
  constructor() { }

  ngOnInit() {
  }

}
