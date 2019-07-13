import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { Recruiter, Articles } from "src/app/models/RecruiterData";
import { RecruiterComponent } from "src/app/recruiter/recruiter.component";

@Component({
  selector: "app-company-frame",
  templateUrl: "./company-frame.component.html",
  styleUrls: ["./company-frame.component.scss"]
})
export class CompanyFrameComponent extends RecruiterComponent
  implements OnInit, AfterViewInit {
  @Input() company: Recruiter;
  articles: Articles[] = [];
  imageCovers = [
    "../../../assets/images/carousel_1.jpg",
    "../../../assets/images/carousel_2.jpg",
    "../../../assets/images/carousel_3.jpg",
    "../../../assets/images/space_nebula_4k-1280x720.jpg",
    "../../../assets/images/poly-texture.png"
  ];
  randomCover: string;
  ngOnInit() {
    this.getRandomCover()
    this.getArticles(this.company.email);
  }
  ngAfterViewInit(): void {
    this.alertService.setHideTopBar(false);
  }

  getArticles(email) {
    this.articleService.getAllArticles(email).subscribe(articles => {
      this.articles = articles;
    });
  }
  getRandomCover() {
    let randomIndex = Math.floor(Math.random() * (this.imageCovers.length - 1));
    this.randomCover = this.imageCovers[randomIndex];
  }
}
