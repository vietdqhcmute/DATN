import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Candidate } from "../models/CandidateData";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CandidateService {
  private avatarURL = new Subject<string>();
  domainName = environment.APIEndPoint;
  public candidate = new Subject<Candidate>();
  constructor(private http: HttpClient) {}

  getCandidateData(email) {
    this.getCandidateByEmail(email).subscribe(candidate => {
      this.candidate.next(<Candidate>candidate);
    });
  }

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
  getAvatarUrl() {
    return this.avatarURL.asObservable();
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
}
