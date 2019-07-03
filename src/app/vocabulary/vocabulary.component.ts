import { Component, OnInit } from '@angular/core';
import { Vocabulary } from '../domain/vocabulary';
import { VocabularyService } from "./vocabulary.service";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.css']
})
export class VocabularyComponent implements OnInit {

  volcabulaireCat1$: Observable<Vocabulary[]>;
  volcabulaireCat2$: Observable<Vocabulary[]>;
  volcabulaireCat3: Vocabulary[] ;
  volcabulaireCat4: Vocabulary[] ;
  volcabulaireCat5: Vocabulary[] ;
  volcabulaireCat6: Vocabulary[] ;
  volcabulaireCat7: Vocabulary[] ;
  volcabulaireCat8: Vocabulary[] ;

  constructor(private vocabularyService: VocabularyService) { }

  ngOnInit() {
    this.volcabulaireCat1$ = this.vocabularyService.getVocabulary(1);
    this.volcabulaireCat2$ = this.vocabularyService.getVocabulary(2);
  }

}
