import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Recruiter } from "../models/RecruiterData";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RecruiterService {
  domainName = environment.APIEndPoint;

  constructor(protected http: HttpClient) {}

  getRecruiterByEmail(email) {
    return this.http.get<any>(this.domainName + "recruiter/email/" + email);
  }

  updateRecruiterByID(recruiterID, recruiter: Recruiter) {
    const headers = new HttpHeaders({ "Content-type": "application/json" });
    return this.http.put(
      this.domainName + "update/recruiter/" + recruiterID,
      recruiter,
      { headers: headers }
    );
  }
}
