import { Component, OnInit, Input } from "@angular/core";
import { ArticleService } from "src/app/services/article.service";
import { Candidate } from "src/app/models/CandidateData";
import { CandidateService } from "src/app/services/candidate.service";
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: "app-modal-applier",
  templateUrl: "./modal-applier.component.html",
  styleUrls: ["./modal-applier.component.scss"]
})
export class ModalApplierComponent implements OnInit {
  @Input() appliers: [string];
  @Input() _id: string;

  private candidates: Candidate[] = [];
  constructor(
    private router: Router,
    private articleService: ArticleService,
    private candidateService: CandidateService
  ) {}

  ngOnInit() {
    this.onApplyList();
  }

  onApplyList() {
    this.articleService
      .getAllAppliersByArticleId(this._id)
      .subscribe(appliers => {
        appliers.forEach(email => {
          this.candidateService.getCandidateAPI(email).subscribe(candidate => {
            this.candidates.push(<Candidate>candidate);
          });
        });
      });
  }
  onViewApplierCV(email:string){
    this.router.navigate(["profile", email, "create-cv"], {
      queryParams: { edit: false }
    });
  }
}
