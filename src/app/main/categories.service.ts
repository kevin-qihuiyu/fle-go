import { Injectable } from '@angular/core';
import { Category } from '@/_models/category';
import { CATEGORIES } from 'assets/categories';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class CategoriesService {

  constructor() { }

  getCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }

  getCategory(id: number | string) {
    return this.getCategories().pipe(
      // (+) before `id` turns the string into a number
      map((categories: Category[]) => categories.find(category => category.id === +id))
    )
  }
}
