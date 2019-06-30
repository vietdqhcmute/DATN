import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Candidate } from "src/app/models/CandidateData";
import { FormControl, NgForm } from "@angular/forms";
import { TagService } from "src/app/services/tag.service";
import { startWith } from "rxjs/operators";
import { CandidateService } from "src/app/services/candidate.service";
import { Tag } from "src/app/models/Tag";

@Component({
  selector: "app-dialog-edit-profile",
  templateUrl: "./dialog-edit-profile.component.html",
  styleUrls: ["./dialog-edit-profile.component.scss"]
})
export class DialogEditProfileComponent implements OnInit {
  candidate: Candidate;
  tagParams: string[] = [];
  imagePreview: string;
  tagContent = new FormControl();
  tagList: string[] = [];
  filteredOptions;

  constructor(
    private dialogRef: MatDialogRef<DialogEditProfileComponent>,
    private tagService: TagService,
    private candidateService: CandidateService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.candidate = data;
    if (data.tags) {
      this.tagParams = data.tags;
    }
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
  onAddTag(form: NgForm) {
    if (this.tagContent.value === null) {
      return;
    }
    this.tagParams.push(this.tagContent.value);
    this.tagContent.reset();
  }
  onUpdateProfile() {
        this.candidate.tags = this.tagParams;
    this.dialogRef.close(this.candidate);

  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result.toString();
    };
    reader.readAsDataURL(file);
    this.saveAvatar(file);
  }
  _filter(value: string) {
    if (!value) {
      return;
    }
    const filterValue = value.toLowerCase();
    return this.tagList.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }
  saveAvatar(image: File) {
    this.candidateService.updateAvatar(image);
    this.candidateService.getAvatarUrl().subscribe(avatarUrl => {
      this.candidate.image_url = avatarUrl;
      this.candidateService
        .updateCandidateByID(this.candidate._id, this.candidate)
        .subscribe(response => {});
    });
  }
  getAllTags() {
    this.tagService.getAllTagsAPI().subscribe(tags => {
      tags.forEach(element => this.tagList.push(element.content));
    });
  }
}
