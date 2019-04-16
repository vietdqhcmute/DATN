import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Recruiter } from "../models/RecruiterData";
import { Subject } from "rxjs";
import { AlertService } from "./alert.service";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class RecruiterService {
  domainName = environment.APIEndPoint;
  recruiter = new Subject<Recruiter>();
  constructor(
    protected http: HttpClient,
    protected alertService: AlertService,
    protected router: Router
  ) {}

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

  getRecruiter() {
    return this.recruiter.asObservable();
  }
}
