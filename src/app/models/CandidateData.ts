export class Candidate{
  full_name: string;
  display_name: string;
  image_url: string;
  email: string;
  phone: string;
  resume: Resume;
  _id: string;
}
export class Resume{
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

export class Experience{
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

export class Education{
  school_name: string;
  major: string;
  start_month: Number;
  end_month: Number;
  start_year: Number;
  end_year: Number;
  current: boolean;
}

export class Project{
  project_name: string;
  description: string;
  start_month: Number;
  end_month: Number;
  start_year: Number;
  end_year: Number;
  current: boolean;
}
