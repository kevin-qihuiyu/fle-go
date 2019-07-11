import { Component, OnInit, Input } from '@angular/core';
import { Vocabulary } from 'src/app/domain/vocabulary';

@Component({
  selector: 'app-vocabulary-card',
  templateUrl: './vocabulary-card.component.html',
  styleUrls: ['./vocabulary-card.component.css']
})
export class VocabularyCardComponent implements OnInit {

  @Input() vocabulary: Vocabulary;

  constructor() { }

  ngOnInit() {
  }

}
