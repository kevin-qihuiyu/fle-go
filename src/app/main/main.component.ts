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
      name: "Faire des courses",
      desc: "J'achète des merchandises, je mange chez un restaurant...",
      imgSrc: "assets/img/category/1-faire-des-course.jpg"
    },
    {
      name: "Administration",
      desc: "J'envoye une lettre, je demanande le caf, je me fais remboursé...",
      imgSrc: "assets/img/category/2-administration.jpg"
    },
    {
      name: "Se déplacer et Voyager",
      desc: "Je prends le transport en commun, je voyager à l'étranger...",
      imgSrc: "assets/img/category/3-se-deplacer-voyager.jpg"
    },
    {
      name: "Se loger et habiter",
      desc: "Je cherche un logement, j'achète des meubles, je fais la cuisine...",
      imgSrc: "assets/img/category/4-se-loger-habiter-1.jpg"
    },
    {
      name: "Activités et sortir",
      desc: "Je vais au musée, je me renseigne pour un stage, je vais dans un bar...",
      imgSrc: "assets/img/category/5-activities-sortir.jpg"
    },
    {
      name: "Santé & Bien-être",
      desc: "Je vois mon médecin, j'achète à la pharmacie...",
      imgSrc: "assets/img/category/6-sante-bien-etre.jpg"
    },
    {
      name: "Vie amoureuse",
      desc: "Je refuse un homme, je vais me coucher avec...",
      imgSrc: "assets/img/category/7-vie-amoureuse-1.jpg"
    },
    {
      name: "Vie professionnelle",
      desc: "Je passe une entretien, je fais un point avec le manager...",
      imgSrc: "assets/img/category/8-vie-professionnelle.png"
    },
  ];

  ngOnInit() {
  }

}
