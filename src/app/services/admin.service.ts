import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  domainName = environment.APIEndPoint;

  constructor(private http: HttpClient) { }

  getAllCandidatesStatus(){
    return this.http.get<any>(this.domainName + "admin/candidates/status");
  }

  getAllRecruitersStatus(){
    return this.http.get<any>(this.domainName + "admin/recruiters/status");
  }
}
