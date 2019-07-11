import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-desc',
  templateUrl: './image-desc.component.html',
  styleUrls: ['./image-desc.component.scss']
})
export class ImageDescComponent implements OnInit {

  @Input() imgDesc: string;

  constructor() { }

  ngOnInit() {
  }

}
