import { Component, OnInit, Input } from "@angular/core";
import { ArticleService } from "src/app/services/article.service";

@Component({
  selector: "app-modal-applier",
  templateUrl: "./modal-applier.component.html",
  styleUrls: ["./modal-applier.component.scss"]
})
export class ModalApplierComponent implements OnInit {
  @Input() appliers: [string];
  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    console.log(this.appliers);
  }

  onApplyList(_id: string) {
    this.articleService
      .getAllAppliersByArticleId(_id)
      .subscribe(appliers => {});
  }
}
