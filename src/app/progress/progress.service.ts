import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  progressData = [
    {
      name:"Vie Quotidienne", 
      total: 10,
      doneQuestionIds: [],
    },
    {
      name:"Administration", 
      total: 10,
      doneQuestionIds: [],
    },
  ]

  constructor() { }

  getAllProgress() {
    return this.progressData;
  }

  getGlobalProgressValue() {
    let total = 0;
    let done = 0;
    for (var i = 0; i < this.progressData.length; i++) {
      total += this.progressData[i].total;
      done += this.progressData[i].doneQuestionIds.length;
    }
    return done/total;
  }

  addDoneQuestionsWithId(id: string) {
    let index = +id.charAt(0) -1; // hardcoded solution: first digit of qid indicates category
    
    if (!this.progressData[index].doneQuestionIds.includes(id))
      this.progressData[index].doneQuestionIds.push(id);
  }

  clearAllDoneQuestions() {
    this.progressData.forEach(progress => progress.doneQuestionIds = [])
  }



}
