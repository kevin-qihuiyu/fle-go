import { Injectable } from '@angular/core';
import { QSET } from 'src/assets/activities';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { QCMSelectText, QCMSelectImage, AssociateTextToImage, AssociateImageToGoal, CardsortingTextTo2Goals, Question, SelectOnCalendar } from '../domain/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  getQuestions(): Observable<(QCMSelectText | QCMSelectImage | AssociateTextToImage | AssociateImageToGoal | SelectOnCalendar)[]> {
    return of(QSET);
  }

  getQuestion(qid: number | string) {
    return this.getQuestions().pipe(
      // (+) before `id` turns the string into a number
      map((questions: Question[]) => questions.find(question => question.qid === +qid))
    )
  }
}
