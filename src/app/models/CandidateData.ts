export class Candidate {
  full_name: string;
  display_name: string;
  image_url: string;
  email: string;
  github: string;
  linkedin: string;
  phone: string;
  resume: Resume;
  _id: string;
}
export class Resume {
  title: string;
  summary: string;
  website: string;
  experience: Array<Experience>;
  education: Array<Education>;
  project: Array<Project>;
  skill: Array<String>;
}

export class Experience {
  constructor(expereince: Experience) {
    this.company_name = expereince.company_name;
    this.title = expereince.title;
    this.location = expereince.location;
    this.description = expereince.description;
    this.start_month = expereince.start_month;
    this.end_month = expereince.end_month;
    this.start_year = expereince.start_year;
    this.end_year = expereince.end_year;
    this.current = expereince.current;
  }
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
  constructor(education: Education) {
    this.school_name = education.school_name;
    this.major = education.major;
    this.start_month = education.start_month;
    this.end_month = education.end_month;
    this.start_year = education.start_year;
    this.end_year = education.end_year;
    this.current = education.current;
  }
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
