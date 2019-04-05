import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { RecruiterComponent } from 'src/app/recruiter/recruiter.component';

@Component({
  selector: "app-company-description",
  templateUrl: "./company-description.component.html",
  styleUrls: ["./company-description.component.scss"]
})
export class CompanyDescriptionComponent extends RecruiterComponent implements OnInit {
  imageURL_company =
    "https://cdn.itviec.com/photos/35827/processed_headline_photo/fpt-software-headline_photo.png?ojMRBGzhWEL7ri4CE7w3VgwU";
  imageURL =
    "http://c0.img.chungta.vn/2017/12/22/LogoFPT-2017-copy-3042-1513928399.jpg";
  company_name = "FPT Software";
  sub: Subscription;
  company_email:String;
  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      this.loadRecruiterData(params.get("company_email"));
      this.company_email = params.get("company_email");
    });
  }
  onReview(){
    this.router.navigate(["review", this.company_email]);
  }
}
