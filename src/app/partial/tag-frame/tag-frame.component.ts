import { Component, OnInit, Input } from '@angular/core';
import { Tag } from 'src/app/models/Tag';

@Component({
  selector: 'app-tag-frame',
  templateUrl: './tag-frame.component.html',
  styleUrls: ['./tag-frame.component.scss']
})
export class TagFrameComponent implements OnInit {
  @Input() tag: string;
  // tag: Tag={
  //   _id:"",
  //   content: "AngularJS"
  // }
  constructor() { }

  ngOnInit() {
  }

}
