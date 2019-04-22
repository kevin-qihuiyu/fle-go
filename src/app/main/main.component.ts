import { Component, OnInit } from '@angular/core';
import { Category } from '../domain/category';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  categories: Category[] = [
    {
      name: "Administration",
      desc: "La vie quotidienne",
      imgSrc: "https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
    {
      name: "Le transport commun",
      desc: "Moyen transport",
      imgSrc: "https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
  ];

  ngOnInit() {
  }

}
