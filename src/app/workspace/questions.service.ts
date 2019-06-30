import { Injectable } from '@angular/core';
import { Category } from '../domain/category';
import { QSET_1 } from 'src/assets/activities';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { QCMSelectText, QCMSelectImage, AssociateTextToImage, AssociateImageToGoal, CardsortingTextTo2Goals, Question } from '../domain/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  getQuestions(): Observable<(QCMSelectText | QCMSelectImage | AssociateTextToImage | AssociateImageToGoal | CardsortingTextTo2Goals)[]> {
    return of(QSET_1);
  }

  getQuestion(qid: number | string) {
    return this.getQuestions().pipe(
      // (+) before `id` turns the string into a number
      map((questions: Question[]) => questions.find(question => question.qid === +qid))
    )
  }
}
