import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Resume } from 'src/app/models/CandidateData';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  @Input() resume: Resume;
  constructor() { }

  ngOnInit() {
  }

  onSave(){
    console.log(this.resume);
  }

}
