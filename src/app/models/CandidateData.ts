export class Candidate {
  full_name: string;
  display_name: string;
  image_url: string;
  email: string;
  phone: string;
  resume: Resume;
  _id: string;
}
export class Resume {
  title: string;
  summary: string;
  github: string;
  linkedin: string;
  website: string;
  experience: Array<Experience>;
  education: Array<Education>;
  project: Array<Project>;
  skill: Array<String>;
}

export class Experience {
  company_name: string;
  title: string;
  location: string;
  description: string;
  start_month: Number;
  end_month: Number;
  start_year: Number;
  end_year: Number;
  current: boolean;
}

export class Education {
  school_name: string;
  major: string;
  start_month: Number;
  end_month: Number;
  start_year: Number;
  end_year: Number;
  current: boolean;
}

export class Project {
  constructor(project: Project) {
    this.project_name = project.project_name;
    this.description = project.description;
    this.start_month = project.start_month;
    this.end_month = project.end_month;
    this.start_year = project.start_year;
    this.end_year = project.end_year;
    this.current = project.current;
  }
  project_name: string;
  description: string;
  start_month: Number;
  end_month: Number;
  start_year: Number;
  end_year: Number;
  current: boolean;
}
