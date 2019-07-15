import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Candidate } from "../models/CandidateData";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CandidateService {
  domainName = environment.APIEndPoint;
  private avatarURL = new Subject<string>();
  private candidate = new Subject<Candidate>();
  constructor(private http: HttpClient) {}

  getCandidateObservable() {
    return this.candidate.asObservable();
  }

  getAllCandidates() {
    return this.http.get<Candidate[]>(this.domainName + "candidates");
  }

  getCandidate(email) {
    this.getCandidateAPI(email).subscribe(candidate => {
      this.candidate.next(candidate as Candidate);
    });
    return this.candidate.asObservable();
  }

  getCandidateAPI(email) {
    return this.http.get(this.domainName + "candidate/email/" + email);
  }

  getAvatarUrl() {
    return this.avatarURL.asObservable();
  }
  getTags(candidate_id: string) {
    return this.http.get<any>(
      this.domainName + "candidate/tags/" + candidate_id
    );
  }
  getTagsByEmail(email) {
    return this.http.get<any>(
      this.domainName + "candidate/tags/email/" + email
    );
  }

  updateCandidateByID(userID, candidate: Candidate) {
    const headers = new HttpHeaders({ "Content-type": "application/json" });
    return this.http.put(
      this.domainName + "update/candidate/" + userID,
      candidate,
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
  //Create report tag for candidate
  createReportTag(params: any) {
    return this.http.put(this.domainName + "report/tag/candidate", params);
  }
}
