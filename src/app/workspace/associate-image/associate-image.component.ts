import { Component, OnInit } from '@angular/core';
import { AssociateImage, QuestionType } from 'src/app/domain/question';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-associate-image',
  templateUrl: './associate-image.component.html',
  styleUrls: ['./associate-image.component.css']
})
export class AssociateImageComponent implements OnInit {

  numOfChoices = 4;
  descOrder = [0, 1, 2, 3];
  imageOrder = [0, 1, 2, 3];
  displayOrder = [];

  sampleQuestion : AssociateImage = {
    name: "À la gare",
    questionType: QuestionType.ASSOCIEZ,
    desc: "Qu'est-ce que vous faites à la gare?",
    numOfChoices: 4,
    choices: [
      {
        desc: "Je regarde les horaires.",
        imgSrc: "../../../assets/img/question/q3/1/1-regarder-les-horaires.jpg"
      },
      {
        desc: "J'achète un billet.",
        imgSrc: "../../../assets/img/question/q3/1/2-acheter-billet.jpg"
      },
      {
        desc: "Je composte mon billet.",
        imgSrc: "../../../assets/img/question/q3/1/3-composter-mon-billet.jpg"
      },
      {
        desc: "J'attends sur le quai.",
        imgSrc: "../../../assets/img/question/q3/1/4-sur-le-quai.jpg"
      }
    ],
  };

  constructor() { }

  ngOnInit() {
    AssociateImageComponent.shuffleArray(this.descOrder);
    AssociateImageComponent.shuffleArray(this.imageOrder);
    for (var i = 0; i < this.numOfChoices; i++) {
      this.displayOrder.push({
        desc: this.descOrder[i],
        image: this.imageOrder[i] 
      });
    }

  }

  static shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.descOrder, event.previousIndex, event.currentIndex);
  }

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi'
  ];

  drop2(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

}
