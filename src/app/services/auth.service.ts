import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { AuthenticatModel } from "../models/LoginData";
import { AlertService } from "./alert.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  domainName = environment.APIEndPoint;
  private authStatusListener = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertService: AlertService
  ) {}
  //==================================================New code=================================
  createCandidate(candidateParams) {
    this.http.post(this.domainName + "sign-up", candidateParams).subscribe(
      response => {
        console.log(response);
        this.alertService.success("Create successfully!", true);
      },
      error => {
        console.log(error);
        this.alertService.error(error, false)
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
          this.alertService.success("Create successfully!", true);
        },
        error => {
          console.log(error);
          this.alertService.error(error, false)
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
        userResponse => {
          const token = userResponse.token;
          const role = userResponse.fetcheddata.role;
          const email = userResponse.fetcheddata.email;
          if (token) {
            this.saveAuthDataToBrowser(userResponse);
            this.authStatusListener.next(true);
            if (role === 1) {
              this.loginAsCandidate(email);
            } else if (role === 2) {
              this.loginAsRecruiter(email);
            } else {
              this.loginAsAdministrator();
            }
          }
        },
        error => {
          console.log(error);
          this.alertService.error(error, false)
        }
      );
  }

  logout() {
    this.clearAuthData();
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  autoLogin() {
    const authData = this.getAuthData();
    if (!authData) {
      return;
    }
    if (authData.role === 1) {
      this.loginAsCandidate(authData.email);
    } else if (authData.role === 2) {
      this.loginAsRecruiter(authData.email);
    } else {
      this.loginAsAdministrator();
    }
  }

  private getAuthData() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      return;
    }
    const token = currentUser.token;
    const role = currentUser.role;
    const email = currentUser.email;
    if (!token || !role || !email) {
      return;
    }
    return {
      token: token,
      role: role,
      email: email
    };
  }
  private clearAuthData() {
    localStorage.removeItem("currentUser");
  }
  private loginAsCandidate(email) {
    this.router.navigate(["profile/", email]);
  }
  private loginAsRecruiter(email) {
    this.router.navigate(["recruiter/", email]);
  }
  private loginAsAdministrator() {
    this.router.navigate(["admin"]);
  }
  private saveAuthDataToBrowser(user) {
    let currentUser = {
      token: user.token,
      role: user.fetcheddata.role,
      email: user.fetcheddata.email
    };
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }
}
