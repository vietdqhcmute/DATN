import { Component, OnInit, Input } from "@angular/core";
import { Candidate } from "src/app/models/CandidateData";
import { CandidateService } from "src/app/services/candidate.service";
import { Subscription } from "rxjs";
import { AlertService } from "src/app/services/alert.service";
import { TagService } from "src/app/services/tag.service";
import { Tag } from "src/app/models/Tag";
import { FormControl } from "@angular/forms";
import { startWith } from "rxjs/operators";

@Component({
  selector: "app-modal-edit-profile",
  templateUrl: "./modal-edit-profile.component.html",
  styleUrls: ["./modal-edit-profile.component.scss"]
})
export class ModalEditProfileComponent implements OnInit {
  @Input() candidate: Candidate;
  imagePreview: string;
  private tagList: string[] = [];
  private tagContent = new FormControl();
  private filteredOptions;

  sub: Subscription[];

  constructor(
    private candidateService: CandidateService,
    private alertService: AlertService,
    private tagService: TagService
  ) {}

  ngOnInit() {
    this.getAllTags();
    this.tagContent.valueChanges.pipe(startWith("")).subscribe(value => {
      this.filteredOptions = this._filter(value);
    });
  }
  onSave() {
    this.candidateService
      .updateCandidateByID(this.candidate._id, this.candidate)
      .subscribe(
        res => {
          console.log("Success: ", res);
          this.alertService.success("Update user sucesss", false);
        },
        error => {
          console.error(error);
          this.alertService.error("Can not update user", false);
        }
      );
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
