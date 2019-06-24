import { Injectable } from '@angular/core';
import { ACTIVITIES_1, ACTIVITIES_2 } from '../data/course-content/activities';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Activity } from '../domain/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor() { }

  getActivities(id: number | string): Observable<Activity[]> {
    switch(+id) {
      case 1: {
        return of(ACTIVITIES_1);
        break;
      }
      case 2: {
        return of(ACTIVITIES_2);
        break;
      }
    }
  }

}
