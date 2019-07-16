import { Injectable } from '@angular/core';
import { ACTIVITIES_1, ACTIVITIES_2, ACTIVITIES_3, ACTIVITIES_4, ACTIVITIES_5, ACTIVITIES_6, ACTIVITIES_7, ACTIVITIES_8  } from 'src/assets/activity-list';
import { Observable, of } from 'rxjs';
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
      case 3: {
        return of(ACTIVITIES_3);
        break;
      }
      case 4: {
        return of(ACTIVITIES_4);
        break;
      }
      case 5: {
        return of(ACTIVITIES_5);
        break;
      }
      case 6: {
        return of(ACTIVITIES_6);
        break;
      }
      case 7: {
        return of(ACTIVITIES_7);
        break;
      }
      case 8: {
        return of(ACTIVITIES_8);
        break;
      }
    }
  }

}
