import { Component, OnInit } from "@angular/core";
import { TagService } from "src/app/services/tag.service";
import { Tag } from "src/app/models/Tag";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { startWith, map } from "rxjs/operators";

@Component({
  selector: "app-modal-tag",
  templateUrl: "./modal-tag.component.html",
  styleUrls: ["./modal-tag.component.scss"]
})
export class ModalTagComponent implements OnInit {
  private tags: string[] = [];
  private myControl = new FormControl();
  private filteredOptions: Observable<string[]>;
  private optionsTest: string[] = [
    "AngularJS",
    "ReactJS",
    "DevOps",
    "Ruby on Rails"
  ];
  constructor(private tagService: TagService) {}

  ngOnInit() {
    this.tagService.getAllTagsAPI().subscribe(tags => {
      tags.forEach(element => this.tags.push(element.content));
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(""),
        map(value => this._filter(value))
      );
    });
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.tags.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
