export class Recruiter {
  _id: string;
  company_name: string;
  image_url: string;
  email: string;
  phone: string;
  address: string;
  employees: string;
  website: string;
  overview: string;
  city: string;
  production: string;
  day_at_work: string;
  slogan: string;
  created_at: Date;
  updated_at: Date;
}

export class Articles {
  _id: string;
  title: string;
  tags: [];
  salary: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

export class ResponseArticle {
  email: string;
  articles: [];
  _id: string;
}
