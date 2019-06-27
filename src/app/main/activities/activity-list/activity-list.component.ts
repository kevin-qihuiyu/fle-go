import { Component, OnInit } from '@angular/core';
import { Category } from '../../../domain/category';
import { Activity, Difficulty } from '../../../domain/activity';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CategoriesService } from '../../categories.service';
import { Observable } from 'rxjs';
import { ActivitiesService } from '../../activities.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  categoryId: number;
  category$: Observable<Category>;
  activities$: Observable<Activity[]>;

  constructor(  
    private route: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoriesService,
    private activitiesService: ActivitiesService
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
  }

}
