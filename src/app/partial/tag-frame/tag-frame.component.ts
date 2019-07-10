import { Component, OnInit, Input } from '@angular/core';
import { Tag } from 'src/app/models/Tag';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tag-frame',
  templateUrl: './tag-frame.component.html',
  styleUrls: ['./tag-frame.component.scss']
})
export class TagFrameComponent implements OnInit {
  @Input() tag: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClick(){
    this.router.navigate(["/search"], {
      queryParams: { key: this.tag }
    });
  }
}
