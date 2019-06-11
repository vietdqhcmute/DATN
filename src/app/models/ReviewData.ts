export class Review {
  _id: string
  email: string;
  title: string;
  rate_general: Number;
  rate_salary: Number;
  rate_training: Number;
  rate_care: Number;
  rate_culture: Number;
  rate_infrastructure: Number;
  ot_like: string;
  ot_hate: string;
  like: string;
  hate: string;
  isIntroduce: Boolean;
  created_at: Date;
  constructor() {
    this.email = "";
    this.title = "";
    this.rate_general = 0;
    this.rate_salary = 0;
    this.rate_training = 0;
    this.rate_care = 0;
    this.rate_culture = 0;
    this.rate_infrastructure = 0;
    this.ot_like = "";
    this.ot_hate = "";
    this.like = "";
    this.hate = "";
    this.isIntroduce = false;
  }
}
