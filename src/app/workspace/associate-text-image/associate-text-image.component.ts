import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AssociateTextToImage, QuestionType, Question } from 'src/app/domain/question';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-associate-text-image',
  templateUrl: './associate-text-image.component.html',
  styleUrls: ['./associate-text-image.component.css']
})
export class AssociateTextImageComponent implements OnInit {

  @Input() question: AssociateTextToImage;

  numOfChoices = 4;
  descOrder = [0, 1, 2, 3];
  imageOrder = [0, 1, 2, 3];
  randomChoices = [];

  // item box and pool containing items to drag-n-drop
  item1 = [];
  item2 = [];
  item3 = [];
  item4 = [];
  pool = [];

  sampleQuestion : AssociateTextToImage = {
    qid: 999,
    name: "À la gare",
    questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
    desc: "Qu'est-ce que vous faites à la gare?",
    choices: [
      {
        id: 1,
        desc: "Je regarde les horaires.",
        imgSrc: "assets/img/question/q3/1/1-regarder-les-horaires.jpg"
      },
      {
        id: 2,
        desc: "J'achète un billet.",
        imgSrc: "assets/img/question/q3/1/2-acheter-billet.jpg"
      },
      {
        id: 3,
        desc: "Je composte mon billet.",
        imgSrc: "assets/img/question/q3/1/3-composter-mon-billet.jpg"
      },
      {
        id: 4,
        desc: "J'attends sur le quai.",
        imgSrc: "assets/img/question/q3/1/4-sur-le-quai.jpg"
      }
    ],
  };


  constructor() { }

  ngOnInit() {
    AssociateTextImageComponent.shuffleArray(this.descOrder);
    AssociateTextImageComponent.shuffleArray(this.imageOrder);
    for (var i = 0; i < this.numOfChoices; i++) {
      let item = this.imageOrder.pop();
      let choice = this.question.choices[item];

      let descItem = this.descOrder.pop();
      let choiceDesc = this.question.choices[descItem].desc;

      this.pool.push(choiceDesc);

      this.randomChoices.push(choice); 
    }
  }

  /**
   * An implementation of the Durstenfeld shuffle, a computer-optimized version of Fisher-Yates algorithm.
   * The Fisher-Yates algorithm works by picking one random element for each original array element, and then excluding it from the next draw. 
   * Just like randomly picking from a deck of cards.
   * @param array 
   */
  static shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }  
  }

}
