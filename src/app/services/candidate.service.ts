import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Candidate } from "../models/CandidateData";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CandidateService {
  domainName = environment.APIEndPoint;

  constructor(private http: HttpClient) {}
  getCandidateByEmail(email) {
    return this.http.get(this.domainName + "candidate/email/" + email);
  }
  updateCandidateByID(userID, candidate: Candidate) {
    const headers = new HttpHeaders({ "Content-type": "application/json" });
    return this.http.put(
      this.domainName + "update/candidate/" + userID,
      candidate,
      { headers: headers }
    );
  }
}
