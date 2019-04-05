import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-frame',
  templateUrl: './company-frame.component.html',
  styleUrls: ['./company-frame.component.scss']
})
export class CompanyFrameComponent implements OnInit {
  image_URL="http://c0.img.chungta.vn/2017/12/22/LogoFPT-2017-copy-3042-1513928399.jpg";
  company_name="FPT SOFTWARE";
  constructor() { }

  ngOnInit() {
  }

}
