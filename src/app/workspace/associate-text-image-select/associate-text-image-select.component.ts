import { Component, OnInit, Input } from '@angular/core';
import { AssociateTextToImage, QuestionType } from '@/_models';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-associate-text-image-select',
  templateUrl: './associate-text-image-select.component.html',
  styleUrls: ['./associate-text-image-select.component.scss']
})
export class AssociateTextImageSelectComponent implements OnInit {

  @Input() question: AssociateTextToImage;

  numOfChoices = 4;

  // Questions
  randomImages = [];

  // Container for answer pool
  randomTextPool = [];

  answers = [];
  answersStatus = [];


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

 // Audio Description Management
 hasAudio: boolean = false;

  matched = undefined;

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
  }

  ngOnInit() {

    this.randomImages = [...this.question.choices];
    this.randomTextPool = [...this.question.choices];

    AssociateTextImageSelectComponent.shuffleArray(this.randomImages);
    AssociateTextImageSelectComponent.shuffleArray(this.randomTextPool);

    if (this.question.audioDesc) this.hasAudio = true;

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

  validateMatch() {
    var allCorrect = true;

    this.randomImages.forEach((element, index) => {
      if (element.id == this.answers[index]) {
        this.answersStatus[index] = 1;
      } else {
        this.answersStatus[index] = 0;
        allCorrect = false;
      }
    });

    return allCorrect;
  }

}
