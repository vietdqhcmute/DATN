import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Recruiter, ResponseArticle } from "../models/RecruiterData";
import { Subject } from "rxjs";
import { ContentObserver } from "@angular/cdk/observers";

@Injectable({
  providedIn: "root"
})
export class RecruiterService {
  domainName = environment.APIEndPoint;

  constructor(private http: HttpClient) {}

  getRecruiterByEmail(email) {
    return this.http.get(this.domainName + "recruiter/email/" + email);
  }

  updateCandidateByID(recruiterID, recruiter: Recruiter) {
    const headers = new HttpHeaders({ "Content-type": "application/json" });
    return this.http.put(
      this.domainName + "update/recruiter/" + recruiterID,
      recruiter,
      { headers: headers }
    );
  }

  saveRecruitPost(requestBody: Object) {
    this.http
      .post(this.domainName + "push/recruit-post/", requestBody)
      .subscribe(response => {
        console.log(response);
      });
  }
  getAllRecruiterPost(email) {
    return this.http.get<any>(this.domainName + "recruit-post/" + email);
  }
  getRecruiterPostByEmailAndId(email:String, id: String){
    return this.http.get<any>(this.domainName+"recruit-post/"+email+"/"+id);
  }
}
