export class Review {
  company_email: String;
  rate_general: Number;
  rate_salary: Number;
  rate_training: Number;
  rate_care: Number;
  rate_culture: Number;
  rate_infrastructure: Number;
  title: String;
  ot_like: String;
  ot_hate: String;
  like: String;
  hate: String;
  isIntroduce: Boolean;
  created_at: Date;
  constructor() {
    this.company_email = "";
    this.rate_general = 0;
    this.rate_salary = 0;
    this.rate_training = 0;
    this.rate_care = 0;
    this.rate_culture = 0;
    this.rate_infrastructure = 0;
    this.title = "";
    this.ot_like = "";
    this.ot_hate = "";
    this.like = "";
    this.hate = "";
    this.isIntroduce = false;
  }
}
