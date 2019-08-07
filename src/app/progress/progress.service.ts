import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService, UserService } from '../_helpers';
import { User } from '../_models';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  currentUser;
  currentUserSnapshot;

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

  constructor(private authenticationService: AuthService,
    private userService: UserService) { 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

    this.progressData[0].doneQuestionIds = this.currentUser.cat1doneQuestionIds;
    this.progressData[1].doneQuestionIds = this.currentUser.cat2doneQuestionIds;
    this.progressData[2].doneQuestionIds = this.currentUser.cat3doneQuestionIds;
    this.progressData[3].doneQuestionIds = this.currentUser.cat4doneQuestionIds;
    this.progressData[4].doneQuestionIds = this.currentUser.cat5doneQuestionIds;
    this.progressData[5].doneQuestionIds = this.currentUser.cat6doneQuestionIds;
    this.progressData[6].doneQuestionIds = this.currentUser.cat7doneQuestionIds;
    this.progressData[7].doneQuestionIds = this.currentUser.cat8doneQuestionIds;
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
    let index = +id.charAt(0); 
    // hardcoded solution: first digit of qid indicates category; eg qid-104 is a question in category1

    switch(index) {
      case 1: { 
        if (!this.currentUser.cat1doneQuestionIds.includes(id)) {
          this.currentUser.cat1doneQuestionIds.push(id);
          this.updateUser(this.currentUser);
        }
        break; 
      }
      case 2: { 
        if (!this.currentUser.cat2doneQuestionIds.includes(id)) {
          this.currentUser.cat2doneQuestionIds.push(id);
          this.updateUser(this.currentUser);
        }
        break; 
      }
      case 3: { 
        if (!this.currentUser.cat3doneQuestionIds.includes(id)) {
          this.currentUser.cat3doneQuestionIds.push(id);
          this.updateUser(this.currentUser);
        }
        break; 
      }
      case 4: { 
        if (!this.currentUser.cat4doneQuestionIds.includes(id)) {
          this.currentUser.cat4doneQuestionIds.push(id);
          this.updateUser(this.currentUser);
        }
        break; 
      }
      case 5: { 
        if (!this.currentUser.cat5doneQuestionIds.includes(id)) {
          this.currentUser.cat5doneQuestionIds.push(id);
          this.updateUser(this.currentUser);
        }
        break; 
      }
      case 6: { 
        if (!this.currentUser.cat6doneQuestionIds.includes(id)) {
          this.currentUser.cat6doneQuestionIds.push(id);
          this.updateUser(this.currentUser);
        }
        break; 
      }
      case 7: { 
        if (!this.currentUser.cat7doneQuestionIds.includes(id)) {
          this.currentUser.cat7doneQuestionIds.push(id);
          this.updateUser(this.currentUser);
        }
        break; 
      }
      case 8: { 
        if (!this.currentUser.cat8doneQuestionIds.includes(id)) {
          this.currentUser.cat8doneQuestionIds.push(id);
          this.updateUser(this.currentUser);
        }
        break; 
      }
    }
  }

  updateUser(user) {
    // update database via api
    this.userService.update(user._id, user)
      .pipe(first())
      .subscribe();
    // update current user store in local storage (session)
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  clearAllDoneQuestions() {
    this.progressData.forEach(progress => progress.doneQuestionIds = [])
    //TODO: use API to update database
  }



}
