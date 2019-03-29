export class Recruiter {
  company_name: string;
  image_url: string;
  email: string;
  phone: string;
  address: string;
  employees: Number;
  website: string;
  overview: string;
  candidate_followed: Array<any>;
  city: String;
  created_at: Date;
  updated_at: Date;
}

export class RecruitPost {
  title: string;
  tags: [];
  salary: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}
