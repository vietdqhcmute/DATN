import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { AuthenticatModel } from "../models/LoginData";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  domainName = environment.APIEndPoint;
  private authStatusListener = new Subject<boolean>();


  constructor(private http: HttpClient, private router: Router) {}
  //==================================================New code=================================
  createCandidate(candidateParams) {
    this.http.post(this.domainName + "sign-up", candidateParams).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
  createRecruiter(recruiterParams) {
    //Add in Recruiter table
    this.http
      .post(this.domainName + "recruiter/sign-up", recruiterParams)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    //Add in RecruiterReview table
    this.http
      .post(this.domainName + "add/review/" + recruiterParams.email, {})
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }
  login(loginParams) {
    this.http
      .post<{ token: string; fetcheddata: AuthenticatModel }>(
        this.domainName + "login",
        loginParams
      )
      .subscribe(
        response => {
          const token = response.token;
          const role = response.fetcheddata.role;
          const email = response.fetcheddata.email;
          if (token) {
            this.authStatusListener.next(true);
            if (role === 1) {
              this.loginAsCandidate(email);
            } else if (role === 2) {
              this.loginAsRecruiter(email);
            } else {
              this.loginAsAdministrator(email);
            }
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }

  private loginAsCandidate(email) {
    this.router.navigate(["profile/", email]);
  }
  private loginAsRecruiter(email) {
    this.router.navigate(["recruiter/", email]);
  }
  private loginAsAdministrator(email) {
    this.router.navigate(["admin"]);
  }
}
