import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Activity } from '@/_models/activity';
import { ACTIVITIES_1, ACTIVITIES_2, ACTIVITIES_3, ACTIVITIES_4, ACTIVITIES_5, ACTIVITIES_6, ACTIVITIES_7, ACTIVITIES_8  } from 'assets/activity-list';

@Injectable({providedIn: 'root'})
export class ActivitiesService {

  constructor() { }

  getActivities(id: number | string): Observable<Activity[]> {
    switch(+id) {
      case 1: {
        return of(ACTIVITIES_1);
      }
      case 2: {
        return of(ACTIVITIES_2);       
      }
      case 3: {
        return of(ACTIVITIES_3);
      }
      case 4: {
        return of(ACTIVITIES_4);
      }
      case 5: {
        return of(ACTIVITIES_5);
      }
      case 6: {
        return of(ACTIVITIES_6);
      }
      case 7: {
        return of(ACTIVITIES_7);
      }
      case 8: {
        return of(ACTIVITIES_8);
      }
    }
  }

}
