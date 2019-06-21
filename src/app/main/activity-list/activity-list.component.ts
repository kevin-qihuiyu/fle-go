import { Component, OnInit } from '@angular/core';
import { Category } from '../../domain/category';
import { Activity, Difficulty } from '../../domain/activity';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CategoriesService } from '../categories.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  category0: Category;
  category$: Observable<Category>;
  activities: Activity[];

  constructor(  
    private route: ActivatedRoute,
    private router: Router,
    private service: CategoriesService
    ) { 
    this.activities = [
      {
        name: "Aller à la Poste",
        category: this.category0,
        difficulty: Difficulty.DÉBUTANT,
        unlocked: true
      },
      {
        name: "Apporter ses documents",
        category: this.category0,
        difficulty: Difficulty.DÉBUTANT,
        unlocked: true
      },
      {
        name: "Comprendre un message d'annulation",
        category: this.category0,
        difficulty: Difficulty.DÉBUTANT,
        unlocked: true
      },
      {
        name: "Comprendre une heure de rendez-vous",
        category: this.category0,
        difficulty: Difficulty.INTERMÉDIAIRE,
        unlocked: true
      },
      {
        name: "Envoyer un courrier",
        category: this.category0,
        difficulty: Difficulty.DÉBUTANT,
        unlocked: true
      },
      {
        name: "Identifier la date de fin de validité d'un document",
        category: this.category0,
        difficulty: Difficulty.INTERMÉDIAIRE,
        unlocked: true
      },
    ]

    
  }

  ngOnInit() {
    this.category$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCategory(params.get('id'))
      )
    );
  }

}
