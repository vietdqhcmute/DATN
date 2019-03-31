import { Component, OnInit } from '@angular/core';
import { RecruiterComponent } from '../../recruiter.component';

@Component({
  selector: 'app-recruiter-dashboard',
  templateUrl: './recruiter-dashboard.component.html',
  styleUrls: ['./recruiter-dashboard.component.scss']
})
export class RecruiterDashboardComponent extends RecruiterComponent
 implements OnInit {
  articles =[];
  company_email:String;
  ngOnInit() {
    this.route.parent.params.subscribe(params=>{
      this.recruiterService.getAllRecruiterPost(params.email).subscribe(responseArticle=>{
        this.company_email = responseArticle.email;
        this.articles=responseArticle.articles;
      });
    });
  }

}
