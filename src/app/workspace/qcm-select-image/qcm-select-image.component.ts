import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QCMSelectImage, QuestionType, Question } from 'src/app/domain/question';

@Component({
  selector: 'app-qcm-select-image',
  templateUrl: './qcm-select-image.component.html',
  styleUrls: ['./qcm-select-image.component.scss']
})
export class QcmSelectImageComponent implements OnInit {

  //@Input() question: Question;
  @Input() question: QCMSelectImage;
  @Input() userChoice;
  @Output() userChoiceChange = new EventEmitter();

  hasAudio: boolean = false;

  // Image Description
  hasImage: boolean = false;


  //////////////////////////////////////////////////////////////////////////////
  constructor() { }

  ngOnInit() {
    if (this.question.audioDesc) {
      this.hasAudio = true;
    }
    if (this.question.imgDesc) {
      this.hasImage = true;
    }
  }

  onUserChoiceChange(newValue){
    this.userChoiceChange.emit(newValue);
  }

  validateSelect(): boolean {
    return (this.userChoice == this.question.correctChoiceId.toString())
  }

}
