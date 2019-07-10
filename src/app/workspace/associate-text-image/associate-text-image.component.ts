import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AssociateTextToImage, QuestionType, Question } from 'src/app/domain/question';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-associate-text-image',
  templateUrl: './associate-text-image.component.html',
  styleUrls: ['./associate-text-image.component.scss']
})
export class AssociateTextImageComponent implements OnInit {

  @Input() question: AssociateTextToImage;

  numOfChoices = 4;

  // Questions
  randomImages = [];

  // Container for answer pool
  randomTextPool = [];

  // Container for answers under each image
  item1 = [];
  item2 = [];
  item3 = [];
  item4 = [];

  // Status value used to style selection and show correctness
  item1matched;
  item2matched;
  item3matched;
  item4matched;

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
 audio;
 hasAudio: boolean = false;

 loadAudio(audioDesc: string){
   this.audio = new Audio();
   this.audio.src = audioDesc;
   this.audio.load();
 }

 togglePlayAudio(){
   return this.audio.paused ? this.audio.play() : this.audio.pause();
 }


  matched = undefined;

  constructor() { }

  ngOnInit() {

    this.randomImages = [...this.question.choices];
    this.randomTextPool = [...this.question.choices];

    AssociateTextImageComponent.shuffleArray(this.randomImages);
    AssociateTextImageComponent.shuffleArray(this.randomTextPool);

    if (this.question.audioDesc) {
      this.loadAudio(this.question.audioDesc);
      this.hasAudio = true;
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
    // TODO: Clear style of current box
  }

  validateMatch() {
    var correctIndex = [];

    if(this.item1.length == 1 && this.randomImages[0].id == this.item1[0].id) {
      correctIndex.push('1');
      this.item1matched = 1;
    } else {
      this.item1matched = 0;
    }

    if(this.item2.length == 1 && this.randomImages[1].id == this.item2[0].id) {
      correctIndex.push('2');
      this.item2matched = 1;
    } else {
      this.item2matched = 0;
    }

    if(this.item3.length == 1 && this.randomImages[2].id == this.item3[0].id) {
      correctIndex.push('3');
      this.item3matched = 1;
    } else {
      this.item3matched = 0;
    }

    if(this.item4.length == 1 && this.randomImages[3].id == this.item4[0].id) {
      correctIndex.push('4');
      this.item4matched = 1;
    } else {
      this.item4matched = 0;
    }
    
    return correctIndex;
  }

}
