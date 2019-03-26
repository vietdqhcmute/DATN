import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Recruiter } from '../models/RecruiterData';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {
  domainName = environment.APIEndPoint;

  constructor(private http: HttpClient) { }
  getRecruiterByEmail(email){
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
}
