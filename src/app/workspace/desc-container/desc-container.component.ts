import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-desc-container',
  templateUrl: './desc-container.component.html',
  styleUrls: ['./desc-container.component.scss']
})
export class DescContainerComponent implements OnInit {
  @Input() audioDesc: string;
  @Input() imgDesc: string;
  @Input() questionType: string;

  constructor() { }

  ngOnInit() {
  }

}
