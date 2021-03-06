import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Recruiter } from "../models/RecruiterData";
import { Subject } from "rxjs";
import { AlertService } from "./alert.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class RecruiterService {
  domainName = environment.APIEndPoint;
  private avatarURL = new Subject<string>();
  private recruiter = new Subject<Recruiter>();
  public recruiterEmail = new Subject<string>();

  constructor(
    protected http: HttpClient,
    protected alertService: AlertService,
    protected router: Router
  ) {}

  getRecruiterObservable() {
    return this.recruiter.asObservable();
  }

  setRecruiterEmailObservable(email: string) {
    this.recruiterEmail.next(email);
  }

  getRecruiterEmailObservable() {
    return this.recruiterEmail.asObservable();
  }

  getAllRecruites() {
    return this.http.get<Recruiter[]>(this.domainName + "recruiters");
  }

  getRecruiter(email) {
    this.getRecruiterAPI(email).subscribe(recruiter => {
      this.recruiter.next(recruiter);
    });
    return this.recruiter.asObservable();
  }

  getRecruiterAPI(email) {
    return this.http.get<Recruiter>(this.domainName + "recruiter/email/" + email);
  }

  getAvatarUrl() {
    return this.avatarURL.asObservable();
  }

  updateRecruiterByID(recruiterID, recruiter: Recruiter) {
    const headers = new HttpHeaders({ "Content-type": "application/json" });
    return this.http.put(
      this.domainName + "update/recruiter/" + recruiterID,
      recruiter,
      { headers: headers }
    );
  }

  updateAvatar(image: File) {
    const postImage = new FormData();
    postImage.append("image", image);
    return this.http
      .post<{ imageUrl: string }>(this.domainName + "image_s3", postImage)
      .subscribe(response => {
        this.avatarURL.next(response.imageUrl);
      });
  }

  searchCompany(searchText: string) {
    return this.http.get<Recruiter[]>(
      this.domainName + "search/companies?" + "key=" + searchText
    );
  }
}
