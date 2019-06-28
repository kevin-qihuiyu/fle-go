import { Component, OnInit, Input } from '@angular/core';
import { AssociateImageToGoal, Answer, ImageAnswer } from 'src/app/domain/question';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-associate-image-to-goal',
  templateUrl: './associate-image-to-goal.component.html',
  styleUrls: ['./associate-image-to-goal.component.css']
})
export class AssociateImageToGoalComponent implements OnInit {

  @Input() question: AssociateImageToGoal;

  pool: ImageAnswer[] = [];
  goalContains: ImageAnswer[] = [];

  constructor() { }

  ngOnInit() {
    this.pool = [...this.question.choices];
    AssociateImageToGoalComponent.shuffleArray(this.pool);
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

  drop(event: CdkDragDrop<ImageAnswer[]>) {
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
