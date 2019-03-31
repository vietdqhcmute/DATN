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
  ngOnInit() {
    this.route.parent.params.subscribe(params=>{
      this.recruiterService.getAllRecruiterPost(params.email).subscribe(responseArticle=>{
        this.articles=responseArticle.articles;
      });
    });
  }

}
