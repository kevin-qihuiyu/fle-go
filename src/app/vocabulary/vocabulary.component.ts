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

  library = [
    {
      name:"Vie Quotidienne", 
      volcabularies$: new Observable<Vocabulary[]>()  
    },
    {
      name:"Administration", 
      volcabularies$: new Observable<Vocabulary[]>()     
    },
    {
      name:"Voyager", 
      volcabularies$: new Observable<Vocabulary[]>()      
    },
    {
      name:"Logement", 
      volcabularies$: new Observable<Vocabulary[]>()      
    },
    {
      name:"Activités", 
      volcabularies$: new Observable<Vocabulary[]>()      
    },
    {
      name:"Santé", 
      volcabularies$: new Observable<Vocabulary[]>()      
    },
    {
      name:"Vie Amoureuse", 
      volcabularies$: new Observable<Vocabulary[]>()      
    },
    {
      name:"Vie Professionnelle", 
      volcabularies$: new Observable<Vocabulary[]>()      
    }
  ]

  constructor(private vocabularyService: VocabularyService) { }

  ngOnInit() {
    this.library.forEach((element, index) => {
      element.volcabularies$ = this.vocabularyService.getVocabulary(index + 1);
    });
  }

}
