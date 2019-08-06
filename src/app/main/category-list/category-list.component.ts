import { Component, OnInit } from '@angular/core';
import { Category } from '../../_models/category';
import { CategoriesService } from "../categories.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories : Category[]

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

}
