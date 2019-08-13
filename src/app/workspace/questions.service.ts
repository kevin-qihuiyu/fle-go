import { Injectable } from '@angular/core';
import { QSET } from 'assets/activities';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { QCMSelectText, QCMSelectImage, AssociateTextToImage, Question } from '@/_models';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  getQuestions(): Observable<(Question | QCMSelectText | QCMSelectImage | AssociateTextToImage )[]> {
    return of(QSET);
  }

  getQuestion(qid: number | string) {
    return this.getQuestions().pipe(
      // (+) before `id` turns the string into a number
      map((questions: Question[]) => questions.find(question => question.qid === +qid))
    )
  }
}
