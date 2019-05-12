import { Injectable } from "@angular/core";
import {
  Experience,
  Project,
  Education,
  Resume
} from "../models/CandidateData";

@Injectable({
  providedIn: "root"
})
export class TestingService {
  constructor() {}

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
      description: "Just do something stupid",
      start_month: 7,
      end_month: 9,
      start_year: 2018,
      end_year: 2018,
      current: false
    },
    {
      project_name: "Amanotes",
      description: "Just do something stupid",
      start_month: 7,
      end_month: 9,
      start_year: 2018,
      end_year: 2018,
      current: true
    }
  ];
  public education: Education[] = [
    {
      school_name: "HCMUTE",
      major: "Software architech",
      start_month: 8,
      end_month: 12,
      start_year: 2015,
      end_year: 2019,
      current: true
    },
    {
      school_name: "RMIT",
      major: "Computer Sciene",
      start_month: 8,
      end_month: 12,
      start_year: 2015,
      end_year: 2019,
      current: true
    }
  ];
  public resume: Resume = {
    title:"Ruby Developer",
    summary:"Just a small pieces of shit try to survive in this life",
    github:"https://github.com/vietdqhcmute",
    linkedin:"https://www.linkedin.com/in/viet-do-quoc-206460161/",
    website:"",
    experience: this.experience,
    education: this.education,
    project: this.project,
    skill:[]
  };
}
