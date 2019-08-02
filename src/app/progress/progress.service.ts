import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_helpers';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  currentUser

  progressData = [
    {
      name:"Vie Quotidienne", 
      total: 10,
      doneQuestionIds: [],
    },
    {
      name:"Administration", 
      total: 5,
      doneQuestionIds: [],
    },
    {
      name:"Voyager", 
      total: 3,
      doneQuestionIds: [],
    },
    {
      name:"Se loger", 
      total: 5,
      doneQuestionIds: [],
    },
    {
      name:"Activité, sortir", 
      total: 6,
      doneQuestionIds: [],
    },
    {
      name:"Santé", 
      total: 13,
      doneQuestionIds: [],
    },
    {
      name:"Vie amoureuse", 
      total: 2,
      doneQuestionIds: [],
    },
    {
      name:"Vie professionnelle", 
      total: 3,
      doneQuestionIds: [],
    },
  ]

  constructor(private authenticationService: AuthService) { 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

    this.progressData[0].doneQuestionIds = this.currentUser.cat1doneQuestionIds;
    this.progressData[1].doneQuestionIds = this.currentUser.cat2doneQuestionIds;
    this.progressData[2].doneQuestionIds = this.currentUser.cat3doneQuestionIds;
  }

  getAllProgress() {
    return this.progressData;
  }

  getProgressByCategoryId(id: string | number) {
    return this.progressData[+id-1];
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
