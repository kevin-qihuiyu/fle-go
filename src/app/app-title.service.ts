import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppTitleService {
  private title = new BehaviorSubject<String>('FLE-GO');
  private title$ = this.title.asObservable();

  constructor() {}

  setTitle(title: String) {
    this.title.next(title);
  }

  getTitle(): Observable<String> {
    return this.title$;
  }
}
