import { Component, OnInit } from '@angular/core';
import { Category } from '../domain/category';
import { Activity, Difficulty } from '../domain/activity';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  category: Category;
  activities: Activity[];

  constructor() { 
    this.category = {
      name: "Administration",
      desc: "Adminisration",
      numOfActivities: 100,
      numOfFinished: 23,
      imgSrc: "assets/img/category/2-administration.jpg",
    }

    this.activities = [
      {
        name: "Aller à la Poste",
        category: this.category,
        difficulty: Difficulty.DÉBUTANT,
        unlocked: true
      },
      {
        name: "Apporter ses documents",
        category: this.category,
        difficulty: Difficulty.DÉBUTANT,
        unlocked: true
      },
      {
        name: "Comprendre un message d'annulation",
        category: this.category,
        difficulty: Difficulty.DÉBUTANT,
        unlocked: true
      },
      {
        name: "Comprendre une heure de rendez-vous",
        category: this.category,
        difficulty: Difficulty.INTERMÉDIAIRE,
        unlocked: true
      },
      {
        name: "Envoyer un courrier",
        category: this.category,
        difficulty: Difficulty.DÉBUTANT,
        unlocked: true
      },
      {
        name: "Identifier la date de fin de validité d'un document",
        category: this.category,
        difficulty: Difficulty.INTERMÉDIAIRE,
        unlocked: true
      },
    ]

    
  }

  ngOnInit() {
  }

}
