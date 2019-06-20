import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Candidate } from "src/app/models/CandidateData";
import { FormControl } from "@angular/forms";
import { TagService } from "src/app/services/tag.service";
import { startWith } from 'rxjs/operators';

@Component({
  selector: "app-dialog-edit-profile",
  templateUrl: "./dialog-edit-profile.component.html",
  styleUrls: ["./dialog-edit-profile.component.scss"]
})
export class DialogEditProfileComponent implements OnInit {
  candidate: Candidate;
  tagContent = new FormControl();
  tagList: string[] = [];
  filteredOptions;

  constructor(
    private dialogRef: MatDialogRef<DialogEditProfileComponent>,
    private tagService: TagService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.candidate = data;
  }

  ngOnInit() {
    this.getAllTags();
    this.tagContent.valueChanges.pipe(startWith("")).subscribe(value => {
      this.filteredOptions = this._filter(value);
    });
  }

  close() {
    this.dialogRef.close();
  }
  onSave() {}
  _filter(value: string) {
    if (!value) {
      return;
    }
    const filterValue = value.toLowerCase();
    return this.tagList.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }
  getAllTags() {
    this.tagService.getAllTagsAPI().subscribe(tags => {
      tags.forEach(element => this.tagList.push(element.content));
    });
  }
}
