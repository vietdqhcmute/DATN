import { Injectable } from "@angular/core";
import { Experience, Project } from "../models/CandidateData";

@Injectable({
  providedIn: "root"
})
export class TestingService {
  public experience: Experience[] = [
    {
      company_name: "Amanotes JSC",
      title: "Backend Developer",
      location: "Ho Chi Minh City",
      description: "Internship",
      start_month: 6,
      start_year: 2018,
      end_month: 8,
      end_year: 2018,
      current: false
    },
    {
      company_name: "Codebox Solution Ltd",
      title: "Ruby Developer",
      location: "Ho Chi Minh City",
      description: "API",
      start_month: 2,
      start_year: 2019,
      end_month: 8,
      end_year: 2018,
      current: true
    }
  ];
  public project: Project[] = [
    {
      project_name: "Saleshood",
      description: "",
      start_month: 7,
      end_month: 9,
      start_year: 2018,
      end_year: 2018,
      current: false
    },
    {
      project_name: "Amanotes",
      description: "",
      start_month: 7,
      end_month: 9,
      start_year: 2018,
      end_year: 2018,
      current: true
    }
  ];
  constructor() {}
}
