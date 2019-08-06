import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vocabulary } from '@/_models/vocabulary';
import { VOCABULARY_1, VOCABULARY_2, VOCABULARY_3, VOCABULARY_4, VOCABULARY_5, VOCABULARY_6, VOCABULARY_7, VOCABULARY_8} from 'assets/vocabulary';

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
      case 3: {
        return of(VOCABULARY_3);
        break;
      }
      case 4: {
        return of(VOCABULARY_4);
        break;
      }
      case 5: {
        return of(VOCABULARY_5);
        break;
      }
      case 6: {
        return of(VOCABULARY_6);
        break;
      }
      case 7: {
        return of(VOCABULARY_7);
        break;
      }
      case 8: {
        return of(VOCABULARY_8);
        break;
      }
    }
  }

}
