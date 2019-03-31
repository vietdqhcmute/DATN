import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RecruiterService } from "src/app/services/recruiter.service";

@Component({
  selector: "app-job-description",
  templateUrl: "./job-description.component.html",
  styleUrls: ["./job-description.component.scss"]
})
export class JobDescriptionComponent implements OnInit {
  imageURL =
    "https://cdn.itviec.com/employers/codebox-solutions/logo/w170/iyjuPfdRuWT3EQFTo6PCkKms/codebox-solutions-logo.png";
  company_name = "Codebox Solution Ltd";
  companyInfo = {
    _id:"",
    image_url: "",
    company_name: "",
    addr: "",
    type: "",
    employees: "",
    date_at_work: ""
  };
  jobInfo = {
    _id:"",
    title: "",
    salary: "",
    description: "",
    created_at: ""
  };
  constructor(
    private route: ActivatedRoute,
    private recruiterService: RecruiterService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getPost(params.get("company_email"), params.get("id"));
      this.getCompanyData(params.get("company_email"));
    });
  }

  private getPost(email: String, id: String) {
    this.recruiterService
      .getRecruiterPostByEmailAndId(email, id)
      .subscribe(jobData => {
        this.jobInfo._id = jobData._id;
        this.jobInfo.title = jobData.title;
        this.jobInfo.salary = jobData.salary;
        this.jobInfo.created_at = jobData.created_at;
        this.jobInfo.description = jobData.description;
      });
  }
  private getCompanyData(email) {
    this.recruiterService.getRecruiterByEmail(email).subscribe(response => {
      console.log(response);

    });
  }
}
