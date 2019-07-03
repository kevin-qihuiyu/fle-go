import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vocabulary } from '../domain/vocabulary';
import { VOCABULARY_1, VOCABULARY_2} from 'src/assets/vocabulary';

@Injectable({
  providedIn: 'root'
})
export class VocabularyService {

  constructor() { }

  getVocabulary(id: number | string): Observable<Vocabulary[]> {
    switch(+id) {
      case 1: {
        return of(VOCABULARY_1);
        break;
      }
      case 2: {
        return of(VOCABULARY_2);
        break;
      }
    }
  }

}
