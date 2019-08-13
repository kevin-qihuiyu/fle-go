import { Component, OnInit, Input } from '@angular/core';
import { Question } from '@/_models';

@Component({
  selector: 'app-end-of-category',
  templateUrl: './end-of-category.component.html',
  styleUrls: ['./end-of-category.component.scss']
})
export class EndOfCategoryComponent implements OnInit {
  @Input() question: Question;

  constructor() { }

  ngOnInit() {
  }

}
