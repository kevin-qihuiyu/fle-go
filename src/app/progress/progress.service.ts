import { Injectable } from '@angular/core';
import { UserService } from '@/_helpers/user.service';
import { first } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProgressService {
  currentUser;

  progressData = [
    {
      id: 1,
      name:"Vie Quotidienne", 
      total: 15,
      doneQuestionIds: [],
    },
    {
      id: 2,
      name:"Administration", 
      total: 9,
      doneQuestionIds: [],
    },
    {
      id: 3,
      name:"Voyager", 
      total: 6,
      doneQuestionIds: [],
    },
    {
      id: 4,
      name:"Se loger", 
      total: 9,
      doneQuestionIds: [],
    },
    {
      id: 5,
      name:"Activité, sortir", 
      total: 6,
      doneQuestionIds: [],
    },
    {
      id: 6,
      name:"Santé", 
      total: 13,
      doneQuestionIds: [],
    },
    {
      id: 7,
      name:"Vie amoureuse", 
      total: 2,
      doneQuestionIds: [],
    },
    {      
      id: 8,
      name:"Vie professionnelle", 
      total: 8,
      doneQuestionIds: [],
    },
  ]

  constructor(private userService: UserService) { 
    // Always wants service data sync with currentUser in storage.
    this.updateServiceData();
  }

  updateServiceData() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (this.currentUser){
      this.progressData[0].doneQuestionIds = this.currentUser.cat1doneQuestionIds;
      this.progressData[1].doneQuestionIds = this.currentUser.cat2doneQuestionIds;
      this.progressData[2].doneQuestionIds = this.currentUser.cat3doneQuestionIds;
      this.progressData[3].doneQuestionIds = this.currentUser.cat4doneQuestionIds;
      this.progressData[4].doneQuestionIds = this.currentUser.cat5doneQuestionIds;
      this.progressData[5].doneQuestionIds = this.currentUser.cat6doneQuestionIds;
      this.progressData[6].doneQuestionIds = this.currentUser.cat7doneQuestionIds;
      this.progressData[7].doneQuestionIds = this.currentUser.cat8doneQuestionIds;
    }
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
    this.userService.getCurrent().subscribe(x => this.currentUser = x);
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    // update service data
    this.updateServiceData();

  }

  resetAllProgress() {
    // this.progressData.forEach(progress => progress.doneQuestionIds = [])
    this.currentUser.cat1doneQuestionIds = [];
    this.currentUser.cat2doneQuestionIds = [];
    this.currentUser.cat3doneQuestionIds = [];
    this.currentUser.cat4doneQuestionIds = [];
    this.currentUser.cat5doneQuestionIds = [];
    this.currentUser.cat6doneQuestionIds = [];
    this.currentUser.cat7doneQuestionIds = [];
    this.currentUser.cat8doneQuestionIds = [];
    this.updateUser(this.currentUser);
  }



}
