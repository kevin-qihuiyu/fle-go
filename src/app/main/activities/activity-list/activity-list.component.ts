import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Category } from '@/_models/category';
import { Activity, Difficulty } from '@/_models/activity';
import { switchMap } from 'rxjs/operators';
import { CategoriesService } from '@/main/categories.service';
import { ActivitiesService } from '@/main/activities.service';
import { ProgressService } from '@/progress/progress.service';
import { AppTitleService } from '@/app-title.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  categoryId: number;
  category$: Observable<Category>;
  activities$: Observable<Activity[]>;

  progressData;

  constructor(  
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private activitiesService: ActivitiesService,
    private progressService: ProgressService,
    private appTitleService: AppTitleService
    ) { 

    
  }

  ngOnInit() {
    this.category$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.categoriesService.getCategory(params.get('id'))
      )
    );

    this.activities$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.activitiesService.getActivities(params.get('id'))
      )
    );

    this.category$.subscribe(category => {
      this.categoryId = category.id; 
      // this.appTitleService.setTitle(category.name);
    });
    this.progressData = this.progressService.getProgressByCategoryId(this.categoryId);

  }

}
